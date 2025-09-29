FROM node:12

RUN echo "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list \
    && echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list \
    && apt-get update && apt-get install -y \
    libvips \
    libvips-dev \
    glib2.0-dev
