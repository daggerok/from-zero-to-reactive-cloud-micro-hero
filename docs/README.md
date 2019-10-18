# from zero to reactive cloud micro hero
Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes [![Build Status](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master)](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero)

[[toc]]

## step1
Simple sets of applications implementation for local run

```bash
./mvnw

java -jar step1-speakers-rest-api-service/target/*.jar
java -jar step1-sessions-rsocket-service/target/*.jar
java -jar step1-frontend/target/*.jar

#http :8082/speakers name=max
#http :8082/speakers name=bax
#http :8082/speakers
http :8080
```
