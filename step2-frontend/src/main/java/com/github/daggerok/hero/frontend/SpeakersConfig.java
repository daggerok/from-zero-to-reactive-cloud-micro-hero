package com.github.daggerok.hero.frontend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.Duration;

@Configuration
public class SpeakersConfig {

    @Bean
    WebClient client(@Value("${speakers.port}") Integer speakersPort) {
        return WebClient.builder()
                        .baseUrl(String.format("http://127.0.0.1:%d", speakersPort))
                        .build();
    }

    @Bean
    Mono<ClientResponse> speakers(WebClient client) {
        return client.get()
                     .uri("/speakers")
                     .exchange()
                     .retryBackoff(5, Duration.ofSeconds(3));
    }
}
