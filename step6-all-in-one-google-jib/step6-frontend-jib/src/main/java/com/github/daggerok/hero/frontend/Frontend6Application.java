package com.github.daggerok.hero.frontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        SessionsProps.class,
        SpeakersProps.class,
})
public class Frontend6Application {
    public static void main(String[] args) {
        SpringApplication.run(Frontend6Application.class, args);
    }
}
