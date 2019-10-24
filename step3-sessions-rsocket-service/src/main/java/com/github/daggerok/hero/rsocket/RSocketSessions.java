package com.github.daggerok.hero.rsocket;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
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

@Log4j2
@Controller
@RequiredArgsConstructor
public class RSocketSessions {

    // private final DatabaseClient client;
    // private final ReactiveTransactionManager rtm;
    private final SessionRepository sessionRepository;

    @ResponseBody
    @GetMapping("/sessions")
    public Flux<Session> sessions() {
        return sessionRepository.findAll();
    }

    // /**
    //  * Only that one is currently working fine...
    //  */
    // @ResponseBody
    // @PostMapping("/sessions")
    // public Mono<Integer> save(@RequestBody Session session) {
    //     return Mono.just(Objects.requireNonNull(session, "session may not be null"))
    //                .filter(s -> Objects.nonNull(s.getName()))
    //                .filter(s -> Objects.nonNull(s.getSpeakers()))
    //                .map(s -> Objects.isNull(s.getId()) ? s.setId(UUID.randomUUID()) : s)
    //                .flatMap(s -> client.execute("INSERT INTO sessions (id, name, speakers) VALUES ($1, $2, $3)")
    //                                    .bind("$1", s.getId())
    //                                    .bind("$2", s.getName())
    //                                    .bind("$3", s.getSpeakers())
    //                                    .fetch().rowsUpdated());
    // }

    // /**
    //  * Doesn't work.
    //  * @return
    //  */
    // @ResponseBody
    // @Transactional
    // @PostMapping("/sessions")
    // public Mono<Session> save(@RequestBody Session session) {
    //     return Mono.just(session)
    //                .filter(s -> Objects.nonNull(s.getName()))
    //                .filter(s -> Objects.nonNull(s.getSpeakers()))
    //                .map(s -> Objects.isNull(s.getId()) ? s.setId(UUID.randomUUID()) : s)
    //                .flatMap(sessionRepository::save);
    // }

    // /**
    //  * Failed with: NoSuchBeanDefinitionException:
    //  * No qualifying bean of type 'org.springframework.transaction.PlatformTransactionManager' available
    //  */
    // @ResponseBody
    // @Transactional
    // @PostMapping("/sessions")
    // public Disposable save(@RequestBody Session session) {
    //     return Mono.just(session)
    //                .filter(s -> Objects.nonNull(s.getName()))
    //                .filter(s -> Objects.nonNull(s.getSpeakers()))
    //                .map(s -> Objects.isNull(s.getId()) ? s.setId(UUID.randomUUID()) : s)
    //                .flatMap(sessionRepository::save)
    //                .subscribe(log::info);
    // }

    // /**
    //  * Also failing...
    //  * @return
    //  */
    // @ResponseBody
    // @Transactional
    // @PostMapping("/sessions")
    // public Disposable save(@RequestBody Session session) {
    //     if (Objects.isNull(session.getName())) throw new IllegalStateException("name is required.");
    //     if (Objects.isNull(session.getId())) session.setId(UUID.randomUUID());
    //     TransactionalOperator rtx = TransactionalOperator.create(rtm);
    //     return rtx.execute(status -> sessionRepository.save(session))
    //               .subscribe();
    // }

    @ResponseBody
    @Transactional
    @PostMapping("/sessions")
    public Mono<Session> save(@RequestBody Session session) {
        if (Objects.isNull(session.getName())) throw new IllegalStateException("name is required.");
        if (Objects.isNull(session.getId())) session.setId(UUID.randomUUID());
        return sessionRepository.save(session);
    }

    @MessageMapping("sessions")
    public Flux<Session> get() {
        return sessionRepository.findAll();
    }
}
