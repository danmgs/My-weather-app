FROM node:alpine

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG ENV_SERVER_API_ALLOW_HOSTS=*
ENV ENV_SERVER_API_ALLOW_HOSTS $ENV_SERVER_API_ALLOW_HOSTS

RUN echo $NODE_ENV
RUN echo $ENV_SERVER_API_ALLOW_HOSTS

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
# RUN npm install -g nodemon
COPY . .

CMD ["npm", "run", "start"]
