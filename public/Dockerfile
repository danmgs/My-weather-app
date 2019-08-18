FROM node:alpine

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

RUN echo $NODE_ENV

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "start"]
