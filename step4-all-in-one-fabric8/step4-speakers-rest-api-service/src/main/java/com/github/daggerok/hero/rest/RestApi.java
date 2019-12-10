package com.github.daggerok.hero.rest;

import io.vavr.collection.LinkedHashMap;
import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.r2dbc.core.DatabaseClient;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.function.Function;

import static org.springframework.web.reactive.function.server.RequestPredicates.path;

@Log4j2
@Configuration
@RequiredArgsConstructor
public class RestApi {

    private final DatabaseClient client;

    private static final Function<ServerRequest, String> base =
            serverRequest -> Try.of(() -> serverRequest.uri().toURL())
                                .map(url -> String.format("%s://%s", url.getProtocol(), url.getAuthority()))
                                .getOrElseThrow((Function<Throwable, RuntimeException>) RuntimeException::new);

    private static final Function<ServerRequest, Map<String, String>> api =
            serverRequest -> LinkedHashMap.of("list speakers GET", base.apply(serverRequest) + "/speakers",
                    "add speaker POST", base.apply(serverRequest) + "/speakers")
                                          .toJavaMap();

    private static final ParameterizedTypeReference<Map<String, String>> stringMapType =
            new ParameterizedTypeReference<Map<String, String>>() {
            };

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
        return ServerResponse.ok()
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(client.execute("SELECT id, name FROM speakers")
                                         .as(Speaker.class)
                                         .fetch()
                                         .all(), Speaker.class);
    }

    private Mono<ServerResponse> post(ServerRequest serverRequest) {
        Mono<Speaker> requested = serverRequest.bodyToMono(Speaker.class);
                                               // .flatMap(speaker -> client.execute("INSERT INTO speakers (id, name) VALUES ($1, $2)")
                                               //                           .bind("$1", Optional.ofNullable(speaker.getId())
                                               //                                               .orElse(UUID.randomUUID()))
                                               //                           .bind("$2", speaker.getName())
                                               //                           .fetch()
                                               //                           .rowsUpdated());
        Function<Map<String, Object>, Speaker> mapSpeaker = map -> {
            UUID id = Optional.ofNullable(map.get("id"))
                              .filter(UUID.class::isInstance)
                              .map(UUID.class::cast)
                              .orElseThrow(RuntimeException::new);
            String name = Optional.ofNullable(map.get("name"))
                                  .filter(String.class::isInstance)
                                  .map(String.class::cast)
                                  .orElseThrow(RuntimeException::new);
            return Speaker.allOf(id, name);
        };
        Mono<Map<String, Object>> saved = requested.flatMap(speaker -> client.insert()
                                                                             .into(Speaker.class)
                                                                             .using(speaker)
                                                                             .fetch()
                                                                             .first());
        Mono<Speaker> mapper = saved.doOnEach(i -> log.info("i: {}", i.get()))
                                    .map(mapSpeaker);
        return ServerResponse.accepted()
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(saved, Integer.class);
    }
}
