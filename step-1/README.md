# step 1
Simple sets of applications implementation for local run

```bash
./mvnw

java -jar step-1/speakers-rest-api-service-step-1/target/*.jar
java -jar step-1/sessions-rsocket-service-step-1/target/*.jar
java -jar step-1/frontend-step-1/target/*.jar

#http :8082/speakers name=max
#http :8082/speakers name=bax
#http :8082/speakers
http :8080
```
