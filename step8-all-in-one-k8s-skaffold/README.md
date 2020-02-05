# k8s

## dev with compose

```bash
./mvnw -f step8-all-in-one-k8s-skaffold
./mvnw -pl :step8-all-in-one-k8s-skaffold -P compose-create
./mvnw -pl :step8-all-in-one-k8s-skaffold -P compose-up
http :8101
./mvnw -pl :step8-all-in-one-k8s-skaffold -P compose-down
```

## without skaffold

```bash
./mvnw -f step8-all-in-one-k8s-skaffold
docker login
./mvnw -f step8-all-in-one-k8s-skaffold jib:build
kubectl apply -f step8-all-in-one-k8s-skaffold/k8s
```

## with skaffold

Pfff, tired... in TODO...
