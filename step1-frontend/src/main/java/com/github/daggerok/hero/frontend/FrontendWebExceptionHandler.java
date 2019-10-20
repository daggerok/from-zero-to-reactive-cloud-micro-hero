package com.github.daggerok.hero.frontend;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebExceptionHandler;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.Optional;

@Log4j2
public class FrontendWebExceptionHandler implements WebExceptionHandler {

    @Override
    public Mono<Void> handle(ServerWebExchange exchange, Throwable e) {
        String message = Optional.ofNullable(e.getLocalizedMessage()).orElse("");
        log.info("handling {} error", message);
        String redirect = "/404?details=" + message.replaceAll("[^a-zA-Z0-9_\\-\\\\.]", "_");
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.PERMANENT_REDIRECT);
        response.getHeaders().put(HttpHeaders.LOCATION, Collections.singletonList(redirect));
        return Mono.empty();
    }
}
