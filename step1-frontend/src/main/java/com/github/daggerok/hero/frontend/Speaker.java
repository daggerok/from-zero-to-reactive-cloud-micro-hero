package com.github.daggerok.hero.frontend;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Speaker {
    private UUID id;
    private String name;
}
