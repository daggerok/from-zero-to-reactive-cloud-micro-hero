package com.github.daggerok.hero.frontend;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Session {
    private UUID id;
    private String name;
}
