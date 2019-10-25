package com.github.daggerok.hero.frontend;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@NoArgsConstructor
@ConfigurationProperties("sessions")
public class SessionsProps {
    private String host;
    private Integer port;
    private String url;
}
