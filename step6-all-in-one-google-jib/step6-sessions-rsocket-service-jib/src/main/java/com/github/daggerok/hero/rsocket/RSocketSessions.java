package com.github.daggerok.hero.rsocket;

import lombok.RequiredArgsConstructor;
import org.springframework.data.r2dbc.core.DatabaseClient;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.UUID;

@Controller
@RequiredArgsConstructor
public class RSocketSessions {

    private final SessionRepository sessionRepository;

    @ResponseBody
    @GetMapping("/sessions")
    public Flux<Session> findAll() {
        return sessionRepository.findAll();
    }

    @ResponseBody
    @PostMapping("/sessions")
    public Mono<Session> save(@RequestBody Session session) {
        return Mono.just(session)
                   .filter(s -> Objects.nonNull(s.getName()))
                   .filter(s -> Objects.nonNull(s.getSpeakers()))
                   .flatMap(sessionRepository::save);
    }

    @MessageMapping("sessions")
    public Flux<Session> messageAll() {
        return sessionRepository.findAll();
    }
}
