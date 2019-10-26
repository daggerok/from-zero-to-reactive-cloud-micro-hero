# from zero to reactive cloud micro hero [![Build Status](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master)](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero)
Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes

## Status
IN PROGRESS

## Done
* Configured Travis CI pipelines
* Initialized draft and implement of VuePress documentation
* Implemented step1 with sets of spring boot 2.2.o.RELEASE reactive applications
* Implemented step2 with replacing in-memory map DBs -> r2dbc-postgres spring-data integration (run pg in docker)
* Implemented step3 and Dockerize all applications using fabric8.io maven plugin
* Implemented step4 and Dockerize multi-module application using fabric8.io maven plugin (all in one)
* Implemented step5 with docker-compose maven plugin

## In progress
* Implement step6 and Dockerize all applications using jib maven plugin from Google

## Road map
* Implement step7 with docker-swarm
* Implement step8 with k8s / k3s, rancher, open-shift, etc
* Implement step9 with project riff

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
#./mvnw -pl :step2-docker docker:start
docker stop pg || true ; docker run --rm --name pg -p 5432:5432 postgres:alpine

./mvnw

java -jar step2-speakers-rest-api-service/target/*.jar
java -jar step2-sessions-rsocket-service/target/*.jar
java -jar step2-frontend/target/*.jar

#http :8084/sessions name=maximum speakers=max
#http :8084/sessions

#http :8085/speakers name=max
#http :8085/speakers

http :8083

#./mvnw -pl :step2-docker docker:stop
docker rm -f -v pg
```

## step3
An applications in docker using fabric8.io maven plugin

```bash
./mvnw -pl :step3-postgres-fabric8 docker:build docker:start
./mvnw -pl :step3-sessions-rsocket-service-fabric8,:step3-speakers-rest-api-service-fabric8,:step3-frontend-fabric8 clean package docker:build docker:start

#http :8087/sessions name=maximum speakers=max
#http :8088/speakers name=max
http :8086

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

## GitHub Pages
Documentation is located [here](https://daggerok.github.io/from-zero-to-reactive-cloud-micro-hero/)

## Reference Documentation
For further reference, please consider the following sections:

* [YouTube: Kubernetes Master Class: Kubernetes from Zero to Hero](https://www.youtube.com/watch?v=srQJq1gJXRw)
* [YouTube: k3s -- The Lightweight Kubernetes Distribution Built for the Edge](https://www.youtube.com/watch?v=WYPd7i15XOg)
* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/maven-plugin/)
* [Spring Configuration Processor](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#configuration-metadata-annotation-processor)
* [Thymeleaf](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-features-spring-mvc-template-engines)
* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)
* [Error handling](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-ann-controller-exceptions)
* [ServerWebExchange injection](https://github.com/spring-projects/spring-framework/issues/19857#issuecomment-453452436)
* [R2DBC db initialization](https://github.com/spring-projects-experimental/spring-boot-r2dbc/blob/master/documentation.adoc#database-initialization)
* [Maven + Docker by using fabric.io](https://dmp.fabric8.io/)
* [Maven + Docker by using GoogleContainerTools/jib](GoogleContainerTools/jib) maven plugin
* [Postgres on Docker Hub](https://hub.docker.com/_/postgres)
* [Docker cleanup: docker images -f "dangling=true"](https://docs.docker.com/engine/reference/commandline/images/)
* [docker-compose-maven-plugin](https://github.com/dkanejs/docker-compose-maven-plugin)
