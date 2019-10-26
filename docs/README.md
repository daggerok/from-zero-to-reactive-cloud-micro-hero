# from zero to reactive cloud micro hero
Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes [![Build Status](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master)](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero)

[[toc]]

## what?
* ~~Configured Travis CI pipelines~~
* ~~Initialized draft and implement of VuePress documentation~~
* ~~Implemented step1 with sets of spring boot 2.2.o.RELEASE reactive applications~~
* ~~Implemented step2 with replacing in-memory map DBs -> r2dbc-postgres spring-data integration (run pg in docker)~~
* ~~Implemented step3 and Dockerize all applications using fabric8.io maven plugin~~
* ~~Implemented step4 and Dockerize multi-module application using fabric8.io maven plugin (all in one)~~
* ~~Implemented step5 with docker-compose maven plugin~~
* ~~Implemented step6 and Dockerize all applications using jib maven plugin from Google~~

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
Simple sets of r2dbc applications with postgres (in docker)

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

## step3
An applications in docker using fabric8.io maven plugin

```bash
./mvnw -pl :step3-postgres-fabric8 docker:build docker:start
./mvnw -pl :step3-sessions-rsocket-service-fabric8,:step3-speakers-rest-api-service-fabric8,:step3-frontend-fabric8 clean package docker:build docker:start

#http :8085/speakers name=max
#http :8084/sessions name=maximum speakers=max
http :8083

./mvnw -pl :step3-speakers-rest-api-service-fabric8,:step3-sessions-rsocket-service-fabric8,:step3-frontend-fabric8 docker:stop docker:remove
./mvnw -f step3-postgres-fabric8/ docker:stop docker:remove
```

## step4
Dockerized multi-module application using fabric8.io maven plugin (all in one)

```bash
./mvnw -f step4-all-in-one-fabric8 clean package -DskipTests
./mvnw -f step4-all-in-one-fabric8 -pl :step4-all-in-one-fabric8 docker:build docker:start

#http :8090/sessions name=maximum speakers=max
#http :8091/speakers name=max
http :8089

./mvnw -f step4-all-in-one-fabric8 -pl :step4-all-in-one-fabric8 docker:stop docker:remove
```

## step5
Dockerized multi-module application using docker-compose maven plugin (all in one)

```bash
./mvnw -f step5-all-in-one-docker-compose -pl :step5-all-in-one-docker-compose docker:build docker:start
./mvnw -f step5-all-in-one-docker-compose
./mvnw -f step5-all-in-one-docker-compose -pl :step5-all-in-one-docker-compose docker:stop docker:remove

#./mvnw -pl :step5-all-in-one-docker-compose docker-compose:up

#http :8093/sessions name=maximum speakers=max
#http :8094/speakers name=max
http :8092

./mvnw -pl :step5-all-in-one-docker-compose docker-compose:down
```

## step6
Dockerized multi-module application using jib maven plugin from Google and docker-compose maven plugin (all in one)

```bash
./mvnw -pl :step6-all-in-one-google-jib -P pg-start
./mvnw -f step6-all-in-one-google-jib compile jib:dockerBuild
./mvnw -pl :step6-all-in-one-google-jib -P pg-stop

./mvnw -pl :step6-all-in-one-google-jib -P compose-create
./mvnw -pl :step6-all-in-one-google-jib -P compose-up

#http :8096/sessions name=maximum speakers=max
#http :8097/speakers name=max
http :8095

./mvnw -pl :step6-all-in-one-google-jib -P compose-down
```
