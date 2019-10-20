package com.github.daggerok.hero.frontend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.messaging.rsocket.RSocketRequester;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.time.Duration;

@Configuration
public class SessionsConfig {

    @Bean
    Mono<RSocketRequester> sessions(SessionsProps props,
                                    RSocketRequester.Builder builder) {

        return builder.dataMimeType(MediaType.APPLICATION_JSON)
                      .connectWebSocket(URI.create(String.format("http://127.0.0.1:%d", props.getPort())))
                      // .cache()
                      .retryBackoff(5, Duration.ofSeconds(3));
    }
}
