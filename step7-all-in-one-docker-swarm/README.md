
```bash
docker swarm init
docker service create --name registry --publish published=5000,target=5000 registry:2
./mvnw -pl :step7-all-in-one-docker-swarm -Ppg-start
./mvnw -f step7-all-in-one-docker-swarm
```
