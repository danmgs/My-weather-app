FROM node:alpine as build

# arg with default value if not set.
ARG NODE_ENV=prod

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .

# generate build
RUN npm run build:$NODE_ENV

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# nginx routes config
COPY ./default.conf /etc/nginx/conf.d

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
