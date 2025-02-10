FROM node:20-alpine

RUN mkdir /home/newApp

COPY . /home/newApp

WORKDIR /home/newApp

RUN npm install

CMD ["node", "server.js"]