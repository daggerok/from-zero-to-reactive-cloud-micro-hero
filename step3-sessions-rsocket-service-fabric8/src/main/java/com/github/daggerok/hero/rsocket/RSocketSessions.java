package com.github.daggerok.hero.rsocket;

import lombok.RequiredArgsConstructor;
import org.springframework.data.r2dbc.core.DatabaseClient;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
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

    private final DatabaseClient client;
    private final SessionRepository sessionRepository;

    @ResponseBody
    @GetMapping("/sessions")
    public Flux<Session> sessions() {
        return sessionRepository.findAll();
    }

    @ResponseBody
    @PostMapping("/sessions-db-cli")
    public Mono<Integer> saveWithDatabaseClient(@RequestBody Session session) {
        return Mono.just(Objects.requireNonNull(session, "session may not be null"))
                   .filter(s -> Objects.nonNull(s.getName()))
                   .filter(s -> Objects.nonNull(s.getSpeakers()))
                   .map(s -> Objects.isNull(s.getId()) ? s.setId(UUID.randomUUID()) : s)
                   .flatMap(s -> client.execute("INSERT INTO sessions (id, name, speakers) VALUES ($1, $2, $3)")
                                       .bind("$1", s.getId())
                                       .bind("$2", s.getName())
                                       .bind("$3", s.getSpeakers())
                                       .fetch().rowsUpdated());
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
    public Flux<Session> get() {
        return sessionRepository.findAll();
    }
}
