package com.github.daggerok.hero.frontend;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.result.view.Rendering;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Log4j2
@Controller
@RequiredArgsConstructor
public class IndexPage {

    private final Mono<ClientResponse> speakers;
    private final Mono<RSocketRequester> sessions;

    @ExceptionHandler
    ResponseEntity<String> handle(Throwable e, ServerWebExchange exchange) {
        log.error(e.getLocalizedMessage());
        return ResponseEntity.status(HttpStatus.PERMANENT_REDIRECT)
                             .header(HttpHeaders.LOCATION, "/404")
                             .build();
    }

    @GetMapping({"", "/", "/404"})
    Rendering index(Model model) {
        Flux<Session> sessions = this.sessions.flatMapMany(r -> r.route("sessions")
                                                                       .data(Mono.empty())
                                                                       .retrieveFlux(Session.class));
        Flux<Speaker> speakers = this.speakers.flatMapMany(r -> r.bodyToFlux(Speaker.class));
        if (System.currentTimeMillis() % 7 == 6) throw new RuntimeException("oops");
        return Rendering.view("index")
                        .modelAttribute("message", "Hello!")
                        .modelAttribute("speakers", speakers)
                        .modelAttribute("sessions", sessions)
                        .build();
    }
}
