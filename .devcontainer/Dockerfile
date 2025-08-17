ARG ALPINE_VERSION
FROM alpine:${ALPINE_VERSION} AS developing
USER root
RUN apk add --no-cache git openssh
RUN adduser -D developer
RUN apk add --no-cache nodejs=22.16.0-r2
RUN apk add --no-cache npm=11.3.0-r0
RUN apk add --no-cache docker-cli docker-cli-compose
RUN addgroup -g 969 docker
RUN adduser developer docker
ARG ALPINE_VERSION
ENV ALPINE_VERSION ${ALPINE_VERSION}
USER developer
