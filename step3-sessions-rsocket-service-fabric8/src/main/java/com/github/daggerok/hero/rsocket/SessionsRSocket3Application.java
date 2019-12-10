package com.github.daggerok.hero.rsocket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// @RequiredArgsConstructor
// @EnableTransactionManagement
public class SessionsRSocket3Application/* extends AbstractR2dbcConfiguration*/ {

    // private final ConnectionFactory connectionFactory;
    //
    // @Override
    // public ConnectionFactory connectionFactory() {
    //     return connectionFactory;
    // }
    //
    // @Bean
    // public ReactiveTransactionManager transactionManager() {
    //     return new R2dbcTransactionManager(connectionFactory);
    // }

    public static void main(String[] args) {
        SpringApplication.run(SessionsRSocket3Application.class, args);
    }
}
