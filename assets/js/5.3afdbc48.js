(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"from-zero-to-reactive-cloud-micro-hero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-zero-to-reactive-cloud-micro-hero"}},[s._v("#")]),s._v(" from zero to reactive cloud micro hero")]),s._v(" "),a("p",[s._v("Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes "),a("a",{attrs:{href:"https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#what-is-here"}},[s._v("what is here?")])]),a("li",[a("a",{attrs:{href:"#step-1"}},[s._v("step 1")])]),a("li",[a("a",{attrs:{href:"#step-2"}},[s._v("step 2")])]),a("li",[a("a",{attrs:{href:"#step-3"}},[s._v("step 3")])]),a("li",[a("a",{attrs:{href:"#step-4"}},[s._v("step 4")])]),a("li",[a("a",{attrs:{href:"#step-5"}},[s._v("step 5")])]),a("li",[a("a",{attrs:{href:"#step-6"}},[s._v("step 6")])]),a("li",[a("a",{attrs:{href:"#step-7"}},[s._v("step 7")])]),a("li",[a("a",{attrs:{href:"#cleanup"}},[s._v("cleanup")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"what-is-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-here"}},[s._v("#")]),s._v(" what is here?")]),s._v(" "),a("ul",[a("li",[a("s",[s._v("Configured Travis CI pipelines")])]),s._v(" "),a("li",[a("s",[s._v("Initialized draft and implement of VuePress documentation")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step1 with sets of spring boot 2.2.o.RELEASE reactive applications")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step2 with replacing in-memory map DBs -> r2dbc-postgres spring-data integration (run pg in docker)")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step3 and Dockerize all applications using fabric8.io maven plugin")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step4 and Dockerize multi-module application using fabric8.io maven plugin (all in one)")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step5 with docker-compose maven plugin")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step6 and Dockerize all applications using jib maven plugin from Google")])]),s._v(" "),a("li",[a("s",[s._v("Implemented step7 with docker-swarm")])])]),s._v(" "),a("h2",{attrs:{id:"step-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[s._v("#")]),s._v(" step 1")]),s._v(" "),a("p",[s._v("Simple sets of applications implementation for local run")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -DskipTests\n\njava -jar step1-speakers-rest-api-service/target/*.jar\njava -jar step1-sessions-rsocket-service/target/*.jar\njava -jar step1-frontend/target/*.jar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8082/speakers name=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8082/speakers name=bax")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8082/speakers")]),s._v("\nhttp :8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"step-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[s._v("#")]),s._v(" step 2")]),s._v(" "),a("p",[s._v("Simple sets of r2dbc applications with postgres (in docker)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step2-docker docker:start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker stop pg || true ; docker run --rm --name pg -p 5432:5432 postgres:alpine")]),s._v("\n\n./mvnw\n\njava -jar step2-speakers-rest-api-service/target/*.jar\njava -jar step2-sessions-rsocket-service/target/*.jar\njava -jar step2-frontend/target/*.jar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8085/speakers name=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8085/speakers")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8084/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8084/sessions")]),s._v("\n\nhttp :8083\n\n./mvnw -pl :step2-docker docker:stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker rm -f -v pg")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"step-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3"}},[s._v("#")]),s._v(" step 3")]),s._v(" "),a("p",[s._v("An applications in docker using fabric8.io maven plugin")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step3-postgres-fabric8 docker:build docker:start\n./mvnw -pl :step3-sessions-rsocket-service-fabric8,:step3-speakers-rest-api-service-fabric8,:step3-frontend-fabric8 clean package docker:build docker:start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8085/speakers name=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8084/sessions name=maximum speakers=max")]),s._v("\nhttp :8083\n\n./mvnw -pl :step3-speakers-rest-api-service-fabric8,:step3-sessions-rsocket-service-fabric8,:step3-frontend-fabric8 docker:stop docker:remove\n./mvnw -f step3-postgres-fabric8/ docker:stop docker:remove\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"step-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4"}},[s._v("#")]),s._v(" step 4")]),s._v(" "),a("p",[s._v("Dockerized multi-module application using fabric8.io maven plugin (all in one)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -f step4-all-in-one-fabric8 clean package -DskipTests\n./mvnw -f step4-all-in-one-fabric8 -pl :step4-all-in-one-fabric8 docker:build docker:start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8090/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8091/speakers name=max")]),s._v("\nhttp :8089\n\n./mvnw -f step4-all-in-one-fabric8 -pl :step4-all-in-one-fabric8 docker:stop docker:remove\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"step-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5"}},[s._v("#")]),s._v(" step 5")]),s._v(" "),a("p",[s._v("Dockerized multi-module application using docker-compose maven plugin (all in one)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -f step5-all-in-one-docker-compose -pl :step5-all-in-one-docker-compose docker:build docker:start\n./mvnw -f step5-all-in-one-docker-compose\n./mvnw -f step5-all-in-one-docker-compose -pl :step5-all-in-one-docker-compose docker:stop docker:remove\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#./mvnw -pl :step5-all-in-one-docker-compose docker-compose:up")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8093/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8094/speakers name=max")]),s._v("\nhttp :8092\n\n./mvnw -pl :step5-all-in-one-docker-compose docker-compose:down\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"step-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-6"}},[s._v("#")]),s._v(" step 6")]),s._v(" "),a("p",[s._v("Dockerized multi-module application using jib maven plugin from Google and docker-compose maven plugin (all in one)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step6-all-in-one-google-jib -P pg-start\n./mvnw -f step6-all-in-one-google-jib compile jib:dockerBuild\n./mvnw -pl :step6-all-in-one-google-jib -P pg-stop\n\n./mvnw -pl :step6-all-in-one-google-jib -P compose-create\n./mvnw -pl :step6-all-in-one-google-jib -P compose-up\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8096/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8097/speakers name=max")]),s._v("\nhttp :8095\n\n./mvnw -pl :step6-all-in-one-google-jib -P compose-down\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"step-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-7"}},[s._v("#")]),s._v(" step 7")]),s._v(" "),a("p",[s._v("Dockerized multi-module application using docker-swarm (all in one)")]),s._v(" "),a("p",[a("em",[s._v("prepare docker-swarm")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker swarm init\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" create --name registry --publish "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("published")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(",target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" registry:2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("em",[s._v("run test postgres container for success tests during build")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step7-all-in-one-docker-swarm -P pg-start\n./mvnw -f step7-all-in-one-docker-swarm compile jib:build\n./mvnw -pl :step7-all-in-one-docker-swarm -P pg-stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("em",[s._v("test with docker-compose")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step7-all-in-one-docker-swarm -P compose-create\n./mvnw -pl :step7-all-in-one-docker-swarm -P compose-up\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8099/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8100/speakers name=max")]),s._v("\nhttp :8098\n\n./mvnw -pl :step7-all-in-one-docker-swarm -P compose-down\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("em",[s._v("docker stack deploy")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker stack deploy --compose-file step7-all-in-one-docker-swarm/docker-compose.yml step7\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8100/speakers name=max                  | jq '.'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8099/sessions name=maximum speakers=max | jq '.'")]),s._v("\nhttp :8098\n\ndocker stack "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" step7\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" registry\ndocker swarm leave --force\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[s._v("#")]),s._v(" cleanup")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker rm -f -v `docker ps -aq`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aq"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker rmi -f `docker images -q --filter=dangling=true`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q --filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dangling"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" docker rmi -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker rmi -f `docker images -q -f=reference='*/*step*'`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q -f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reference"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/*step*'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" docker rmi -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);