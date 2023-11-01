FROM node:21.1.0 as base

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y python3

WORKDIR /src

# To keep container active for testing
# ENTRYPOINT ["tail", "-f", "/dev/null"]