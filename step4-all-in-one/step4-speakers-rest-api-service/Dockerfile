FROM openjdk:8u212-jre-alpine
LABEL maintainer="Maksim Kostromin https://github.com/daggerok"
ARG SERVER_PORT_ARG=8080
ENV SERVER_PORT="${SERVER_PORT_ARG}"
ENTRYPOINT java -jar /tmp/app.jar
EXPOSE "${SERVER_PORT}"
HEALTHCHECK --interval=3s --timeout=3s --start-period=3s --retries=9 \
    CMD wget --quiet --tries=1 --spider "http://127.0.0.1:${SERVER_PORT}/actuator/health" || exit 1
COPY target/*.jar /tmp/app.jar
