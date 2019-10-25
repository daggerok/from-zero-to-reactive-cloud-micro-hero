(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"from-zero-to-reactive-cloud-micro-hero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-zero-to-reactive-cloud-micro-hero"}},[s._v("#")]),s._v(" from zero to reactive cloud micro hero")]),s._v(" "),a("p",[s._v("Using java spring-boot reactive webflux r2dbc docker compose docker swarm and k8s kubernetes "),a("a",{attrs:{href:"https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/daggerok/from-zero-to-reactive-cloud-micro-hero.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#what"}},[s._v("what?")])]),a("li",[a("a",{attrs:{href:"#step1"}},[s._v("step1")])]),a("li",[a("a",{attrs:{href:"#step2"}},[s._v("step2")])]),a("li",[a("a",{attrs:{href:"#step3"}},[s._v("step3")])]),a("li",[a("a",{attrs:{href:"#step4"}},[s._v("step4")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"what"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[s._v("#")]),s._v(" what?")]),s._v(" "),a("ul",[a("li",[s._v("Configured Travis CI pipelines")]),s._v(" "),a("li",[s._v("Initialized draft and implement of VuePress documentation")]),s._v(" "),a("li",[s._v("Implemented step1 with sets of spring boot 2.2.o.RELEASE reactive applications")]),s._v(" "),a("li",[s._v("Implemented step2 with replacing in-memory map DBs -> r2dbc-postgres spring-data integration (run pg in docker)")]),s._v(" "),a("li",[s._v("Implemented step3 and Dockerize all applications using fabric8.io maven plugin")]),s._v(" "),a("li",[s._v("Implemented step4 and Dockerize multi-module application using fabric8.io maven plugin (all in one)")])]),s._v(" "),a("h2",{attrs:{id:"step1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step1"}},[s._v("#")]),s._v(" step1")]),s._v(" "),a("p",[s._v("Simple sets of applications implementation for local run")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -DskipTests\n\njava -jar step1-speakers-rest-api-service/target/*.jar\njava -jar step1-sessions-rsocket-service/target/*.jar\njava -jar step1-frontend/target/*.jar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8082/speakers name=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8082/speakers name=bax")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8082/speakers")]),s._v("\nhttp :8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"step2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step2"}},[s._v("#")]),s._v(" step2")]),s._v(" "),a("p",[s._v("Simple sets of r2dbc applications with postgres (in docker)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step2-docker docker:start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker stop pg || true ; docker run --rm --name pg -p 5432:5432 postgres:alpine")]),s._v("\n\n./mvnw\n\njava -jar step2-speakers-rest-api-service/target/*.jar\njava -jar step2-sessions-rsocket-service/target/*.jar\njava -jar step2-frontend/target/*.jar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8085/speakers name=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8085/speakers")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8084/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8084/sessions")]),s._v("\n\nhttp :8083\n\n./mvnw -pl :step2-docker docker:stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker rm -f -v pg")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"step3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step3"}},[s._v("#")]),s._v(" step3")]),s._v(" "),a("p",[s._v("An applications in docker using fabric8.io maven plugin")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -pl :step3-postgres-fabric8 docker:build docker:start\n./mvnw -pl :step3-sessions-rsocket-service-fabric8,:step3-speakers-rest-api-service-fabric8,:step3-frontend-fabric8 clean package docker:build docker:start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8085/speakers name=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8084/sessions name=maximum speakers=max")]),s._v("\nhttp :8083\n\n./mvnw -pl :step3-speakers-rest-api-service-fabric8,:step3-sessions-rsocket-service-fabric8,:step3-frontend-fabric8 docker:stop docker:remove\n./mvnw -f step3-postgres-fabric8/ docker:stop docker:remove\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"step4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step4"}},[s._v("#")]),s._v(" step4")]),s._v(" "),a("p",[s._v("Dockerized multi-module application using fabric8.io maven plugin (all in one)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./mvnw -f step4-all-in-one clean package -DskipTests\n./mvnw -f step4-all-in-one -pl :step4-all-in-one docker:build docker:start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8090/sessions name=maximum speakers=max")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http :8091/speakers name=max")]),s._v("\nhttp :8089\n\n./mvnw -f step4-all-in-one -pl :step4-all-in-one docker:stop docker:remove\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);