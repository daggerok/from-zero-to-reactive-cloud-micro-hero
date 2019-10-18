package com.github.daggerok.hero.rest;

import io.vavr.collection.HashMap;
import io.vavr.collection.LinkedHashMap;
import io.vavr.control.Try;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.stream.Collectors;

import static io.vavr.Predicates.not;
import static org.springframework.web.reactive.function.server.RequestPredicates.path;

@Configuration
public class RestApi {

    private static final Function<ServerRequest, String> base =
            serverRequest -> Try.of(() -> serverRequest.uri().toURL())
                                .map(url -> String.format("%s://%s", url.getProtocol(), url.getAuthority()))
                                .getOrElseThrow((Function<Throwable, RuntimeException>) RuntimeException::new);

    private static final Function<ServerRequest, Map<String, String>> api =
            serverRequest -> LinkedHashMap.of("list speakers GET", base.apply(serverRequest) + "/speakers",
                                              "add speaker POST", base.apply(serverRequest) + "/speakers")
                                          .toJavaMap();

    private static final ParameterizedTypeReference<Map<String, String>> stringMapType =
            new ParameterizedTypeReference<Map<String, String>>() {};

    private final Map<UUID, String> speakers = new ConcurrentHashMap<>();

    @PostConstruct
    public void init() {
        Flux.just("Max", "Maksimko")
            .subscribe(name -> speakers.put(UUID.randomUUID(), name));
    }

    @Bean
    RouterFunction<ServerResponse> routes() {
        return RouterFunctions.route()
                              .POST("/speakers", this::post)
                              .GET("/speakers", this::get)
                              .build()
                              .andRoute(path("/**"), this::fallback);
    }

    private Mono<ServerResponse> fallback(ServerRequest serverRequest) {
        Mono<Map<String, String>> api = Mono.just(RestApi.api.apply(serverRequest));
        return ServerResponse.ok()
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(api, stringMapType);
    }

    private Mono<ServerResponse> get(ServerRequest serverRequest) {
        Collection<Map<String, String>> /*Map<String, String> */ result = speakers.entrySet()
                                                                                  .stream()
                                                                                  .map(e -> HashMap.of("id", e.getKey().toString(),
                                                                  "name", e.getValue())
                                                              .toJavaMap())
                                                                                  // .collect(Collectors.toMap(e -> e.getKey().toString(),
                                                                                  //                           Map.Entry::getValue));
                                                                                  .collect(Collectors.toList());
        return ServerResponse.ok()
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(Flux.fromIterable(result), stringMapType);
    }

    private Mono<ServerResponse> post(ServerRequest serverRequest) {
        Mono<Map<String, String>> speaker = serverRequest.bodyToMono(stringMapType);
        Mono<String> maybeName = speaker.map(request -> request.getOrDefault("name", ""));
        Mono<String> name = maybeName.filter(not(String::isEmpty));
        UUID id = UUID.randomUUID();
        Mono<Map<String, String>> savedSpeaker = name.map(n -> {
            speakers.put(id, n);
            return HashMap.of("id", id.toString(),
                              "name", n)
                          .toJavaMap();
        });
        return ServerResponse.accepted()
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(savedSpeaker, stringMapType);
    }
}
