FROM node:16-alpine

WORKDIR /home/app

COPY package.json /home/app/

RUN npm install

COPY . . /home/app/

EXPOSE 3000

CMD ["node" , "server.js"]

