package com.github.daggerok.hero.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(PostgresProps.class)
public class SpeakersRest2Application {
    public static void main(String[] args) {
        SpringApplication.run(SpeakersRest2Application.class, args);
    }
}
