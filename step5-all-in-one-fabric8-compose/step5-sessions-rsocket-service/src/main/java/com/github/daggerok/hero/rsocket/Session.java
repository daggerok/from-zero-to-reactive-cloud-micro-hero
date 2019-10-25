package com.github.daggerok.hero.rsocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
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
    private UUID id;
    private String name, speakers;

    @Override
    @Transient
    public boolean isNew() {
        boolean isNull = Objects.isNull(id);
        id = isNull ? UUID.randomUUID() : id; // (1)
        return isNull;
    }
}
