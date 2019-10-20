package com.github.daggerok.hero.rest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.UUID;

@Data
@Table("speakers")
@NoArgsConstructor
@Accessors(chain = true)
@AllArgsConstructor(staticName = "allOf")
public class Speaker {
    @Id
    private UUID/* Long*/ id;
    private String name;
}
