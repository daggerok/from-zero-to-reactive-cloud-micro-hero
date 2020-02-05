package com.github.daggerok.hero.rsocket;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;

import java.util.UUID;

public interface SessionRepository extends ReactiveCrudRepository<Session, UUID> {

    @Query("SELECT * FROM sessions WHERE name like %:name%")
    Flux<Session> findAllByNameLike(String name);
}
