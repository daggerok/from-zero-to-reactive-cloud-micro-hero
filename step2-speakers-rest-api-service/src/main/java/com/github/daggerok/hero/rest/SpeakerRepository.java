package com.github.daggerok.hero.rest;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import java.util.UUID;

public interface SpeakerRepository extends ReactiveCrudRepository<Speaker, UUID/*, Long*/> { }
