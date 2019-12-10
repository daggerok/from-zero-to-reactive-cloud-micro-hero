package com.github.daggerok.hero.frontend;

import io.vavr.Lazy;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.result.view.Rendering;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.time.Duration;

@Log4j2
@Controller
public class IndexPage {

    private final Lazy<WebClient> client =
            Lazy.of(() -> WebClient.builder()
                                   .baseUrl("http://127.0.0.1:8082")
                                   .build());

    private final Lazy<Mono<ClientResponse>> speakers =
            Lazy.of(() -> client.get()
                                .get()
                                .uri("/speakers")
                                .exchange()
                                .retryBackoff(2, Duration.ofSeconds(3)));

    private final Lazy<Mono<RSocketRequester>> sessions;

    public IndexPage(RSocketRequester.Builder builder) {
        sessions = Lazy.of(() -> builder.dataMimeType(MediaType.APPLICATION_JSON)
                                        .connectWebSocket(URI.create("http://127.0.0.1:8081"))
                                        // .cache()
                                        .retryBackoff(5, Duration.ofSeconds(3)));
    }

    @ExceptionHandler
    ResponseEntity<String> handle(Throwable e, ServerWebExchange exchange) {
        log.error(e.getLocalizedMessage());
        return ResponseEntity.status(HttpStatus.PERMANENT_REDIRECT)
                             .header(HttpHeaders.LOCATION, "/404")
                             .build();
    }

    @GetMapping({"", "/", "/404"})
    Rendering index(Model model) {
        Flux<Session> sessions = this.sessions.get().flatMapMany(r -> r.route("sessions")
                                                                       .data(Mono.empty())
                                                                       .retrieveFlux(Session.class));
        Flux<Speaker> speakers = this.speakers.get().flatMapMany(r -> r.bodyToFlux(Speaker.class));
        if (System.currentTimeMillis() % 7 == 6) throw new RuntimeException("oops");
        return Rendering.view("index")
                        .modelAttribute("message", "Hello!")
                        .modelAttribute("speakers", speakers)
                        .modelAttribute("sessions", sessions)
                        .build();
    }
}
