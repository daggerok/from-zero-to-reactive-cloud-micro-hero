package com.github.daggerok.hero.rsocket;

import io.vavr.collection.HashMap;
import org.reactivestreams.Publisher;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import reactor.core.publisher.Flux;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Controller
public class RSocketSessions {

    private final Map<UUID, String> sessions = new ConcurrentHashMap<>();

    @PostConstruct
    public void init() {
        Flux.just("Session 1", "Sessiom two", "Just session")
            .subscribe(name -> sessions.put(UUID.randomUUID(), name));
    }

    @MessageMapping("sessions")
    public Flux<Map<String, String>> get() {
        return Flux.fromIterable(sessions.entrySet())
                   .map(e -> HashMap.of("id", e.getKey().toString(),
                                        "name", e.getValue())
                                    .toJavaMap());
    }
}
