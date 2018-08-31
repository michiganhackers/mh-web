FROM node:latest

MAINTAINER Michigan Hackers

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn install

CMD ["yarn", "start"]

EXPOSE 3000