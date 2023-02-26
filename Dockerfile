FROM node:14-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "start:dev" ]