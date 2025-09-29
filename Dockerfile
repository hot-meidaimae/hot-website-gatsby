FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    libvips \
    libvips-dev

RUN apt-get install -y software-properties-common && \
    add-apt-repository -y ppa:deadsnakes/ppa && \
    apt-get update && \
    apt-get install -y python3.10

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash \
    && \. "$HOME/.nvm/nvm.sh" \
    && nvm install 12 \
    && npm config set python /usr/bin/python3.10
