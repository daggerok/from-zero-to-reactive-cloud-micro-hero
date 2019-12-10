package com.github.daggerok.hero.rsocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Objects;
import java.util.UUID;

@Data
@Table("sessions")
@NoArgsConstructor
@Accessors(chain = true)
@AllArgsConstructor(staticName = "allOf")
public class Session implements Persistable<UUID> {

    @Id
    private UUID /*Long */id;
    private String name, speakers;

    @Override
    public boolean isNew() {
        boolean result = Objects.isNull(id);
        // // Failed without settings a value because of SQL SCHEMA has NOT NULL
        // executeMany; SQL [INSERT INTO sessions (name, speakers) VALUES ($1, $2)]; null value in
        // column \"id\" violates not-null constraint; nested exception is
        // io.r2dbc.postgresql.ExceptionFactory$PostgresqlDataIntegrityViolationException: [23502] null value in
        // column \"id\" violates not-null constraint
        // this.id = result ? UUID.randomUUID() : this.id;
        return result;
    }
}
