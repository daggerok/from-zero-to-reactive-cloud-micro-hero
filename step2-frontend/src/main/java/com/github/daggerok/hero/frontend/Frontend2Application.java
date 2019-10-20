package com.github.daggerok.hero.frontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        SessionsProps.class,
        SpeakersProps.class
})
public class Frontend2Application {
    public static void main(String[] args) {
        SpringApplication.run(Frontend2Application.class, args);
    }
}
