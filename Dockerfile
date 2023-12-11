FROM node:20.6.1-alpine3.18

RUN mkdir /app

COPY ./vetemcasa /app/

WORKDIR /app

RUN npm install

EXPOSE 3000