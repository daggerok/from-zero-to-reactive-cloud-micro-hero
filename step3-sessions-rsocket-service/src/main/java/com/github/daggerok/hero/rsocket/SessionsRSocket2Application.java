package com.github.daggerok.hero.rsocket;

import io.r2dbc.spi.ConnectionFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.r2dbc.config.AbstractR2dbcConfiguration;
import org.springframework.data.r2dbc.connectionfactory.R2dbcTransactionManager;
import org.springframework.transaction.ReactiveTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.reactive.TransactionalOperator;

@SpringBootApplication
// @RequiredArgsConstructor
@EnableTransactionManagement
@EnableConfigurationProperties(PostgresProps.class)
public class SessionsRSocket2Application /*extends AbstractR2dbcConfiguration */{

    // private final ConnectionFactory connectionFactory;
    //
    // @Override
    // public ConnectionFactory connectionFactory() {
    //     return connectionFactory;
    // }
    //
    // @Bean
    // public ReactiveTransactionManager reactiveTransactionManager() {
    //     return new R2dbcTransactionManager(connectionFactory);
    // }
    //
    // @Bean
    // public TransactionalOperator transactionalOperator() {
    //     return TransactionalOperator.create(reactiveTransactionManager());
    // }

    public static void main(String[] args) {
        SpringApplication.run(SessionsRSocket2Application.class, args);
    }
}
