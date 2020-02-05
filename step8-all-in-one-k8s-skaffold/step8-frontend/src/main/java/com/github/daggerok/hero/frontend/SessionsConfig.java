package com.github.daggerok.hero.frontend;

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
                      .connectTcp(props.getHost(), props.getPort())
                      // .cache()
                      .retryBackoff(2, Duration.ofSeconds(3));
    }
}
