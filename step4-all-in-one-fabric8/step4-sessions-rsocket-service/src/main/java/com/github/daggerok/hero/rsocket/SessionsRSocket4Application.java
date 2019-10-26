package com.github.daggerok.hero.rsocket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(PostgresProps.class)
public class SessionsRSocket4Application {

    public static void main(String[] args) {
        SpringApplication.run(SessionsRSocket4Application.class, args);
    }
}
