package com.github.daggerok.hero.rest;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties("postgres")
public class PostgresProps {

    private String host;
    private Integer port;
    private String db;
    private String user;
    private String password;
}
