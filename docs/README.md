# from zero to reactive cloud micro hero
Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes [![Build Status](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master)](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero)

[[toc]]

## what?
* Configured Travis CI pipelines
* Initialized draft and implement of VuePress documentation
* Implemented step1 with sets of spring boot 2.2.0.RELEASE reactive applications
* Implemented step2 with replacing in-memory map DBs ->  r2dbc-postgres (in docker) spring-data integration

## step1
Simple sets of applications implementation for local run

```bash
./mvnw -DskipTests

java -jar step1-speakers-rest-api-service/target/*.jar
java -jar step1-sessions-rsocket-service/target/*.jar
java -jar step1-frontend/target/*.jar

#http :8082/speakers name=max
#http :8082/speakers name=bax
#http :8082/speakers
http :8080
```

## step2
Simple sets of r2dbc applications with docker postgres

```bash
./mvnw -pl :step2-docker docker:start
#docker stop pg || true ; docker run --rm --name pg -p 5432:5432 postgres:alpine

./mvnw

java -jar step2-speakers-rest-api-service/target/*.jar
java -jar step2-sessions-rsocket-service/target/*.jar
java -jar step2-frontend/target/*.jar

#http :8085/speakers name=max
#http :8085/speakers

#http :8084/sessions name=maximum speakers=max
#http :8084/sessions

http :8083

./mvnw -pl :step2-docker docker:stop
#docker rm -f -v pg
```
