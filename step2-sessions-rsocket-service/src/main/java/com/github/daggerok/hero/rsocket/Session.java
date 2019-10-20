package com.github.daggerok.hero.rsocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.UUID;

@Data
@Table("sessions")
@NoArgsConstructor
@Accessors(chain = true)
@AllArgsConstructor(staticName = "allOf")
// @RequiredArgsConstructor(staticName = "of")
public class Session {
    @Id
    private UUID /*Long */id;
    private String name, speakers;
}
