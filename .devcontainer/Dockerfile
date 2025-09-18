ARG ARCH_DOCKER_IMAGE_TAG_BUILD_NUMBER
FROM archlinux:base-${ARCH_DOCKER_IMAGE_TAG_BUILD_NUMBER} AS developing
ARG ARCH_DOCKER_IMAGE_TAG_BUILD_NUMBER
ENV ARCH_DOCKER_IMAGE_TAG_BUILD_NUMBER=${ARCH_DOCKER_IMAGE_TAG_BUILD_NUMBER}
USER root
ARG MIRROR_DATE
RUN echo "Server = https://archive.archlinux.org/repos/${MIRROR_DATE}/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
ENV MIRROR_DATE=${MIRROR_DATE}
RUN pacman --noconfirm --refresh --sync
RUN pacman --noconfirm --sync git
RUN pacman --noconfirm --sync openssh
RUN useradd --create-home developer
ARG NODE_PACKAGE_VERSION
ADD https://archive.archlinux.org/packages/n/nodejs/nodejs-${NODE_PACKAGE_VERSION}-x86_64.pkg.tar.zst /tmp/nodejs.pkg.tar.zst
RUN pacman --noconfirm --upgrade /tmp/nodejs.pkg.tar.zst
ENV NODE_PACKAGE_VERSION=${NODE_PACKAGE_VERSION}
ARG NPM_PACKAGE_VERSION
ADD https://archive.archlinux.org/packages/n/npm/npm-${NPM_PACKAGE_VERSION}-any.pkg.tar.zst /tmp/npm.pkg.tar.zst
RUN pacman --noconfirm --upgrade /tmp/npm.pkg.tar.zst
ENV NPM_PACKAGE_VERSION=${NPM_PACKAGE_VERSION}
RUN groupadd --gid 969 docker && usermod --append --groups docker developer && pacman --noconfirm --sync docker docker-compose
RUN pacman --noconfirm --sync graphviz
USER developer
EXPOSE 5173
