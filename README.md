# from zero to reactive cloud micro hero [![Build Status](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master)](https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero)
Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes

## Status
IN PROGRESS

## Done
* Setup Travis CI pipelines
* Initial draft and implement of VuePress documentation
* Implement step1 with sets of spring boot 2.2 reactive applications

## Road map
* Implement step2 with replacing in-memory map DBs -> postgres r2dbc spring-data integration
* Implement step3 with docker
* Implement step4 with docker-compose
* Implement step5 with docker-swarm
* Implement step6 with k8s
* Implement step7 with project riff

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

## GitHub Pages
Documentation is located [here](https://daggerok.github.io/from-zero-to-reactive-cloud-micro-hero/)

## Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/maven-plugin/)
* [Spring Configuration Processor](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#configuration-metadata-annotation-processor)
* [Thymeleaf](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-features-spring-mvc-template-engines)

## Guides
The following guides illustrate how to use some features concretely:

* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)

## Others

* [Error handling](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-ann-controller-exceptions)
* [ServerWebExchange injection](https://github.com/spring-projects/spring-framework/issues/19857#issuecomment-453452436)
