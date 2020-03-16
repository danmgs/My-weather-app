
# MY WEB APP - MEAN STACK [![Build Status](https://travis-ci.org/danmgs/My-weather-app.svg?branch=master)](https://travis-ci.org/danmgs/My-weather-app)

A WEB application providing weather, news, financial information.


![alt capture1](https://github.com/danmgs/My-weather-app/blob/master/public/img/screenshot1.JPG)

![alt capture2](https://github.com/danmgs/My-weather-app/blob/master/public/img/screenshot2.JPG)


## Folder Organization

They are 2 main components :

- Backend     : a Node.js/Express.js webapi using a mongo database for storage
- Frontend    : an angular webapp


```
| -- .env                                 -> Environment variables configuration
| -- docker-compose.yml                   -> Docker
| -- docker-compose-release.yml           -> Docker release version
| -- launch.bat                           -> The launcher of the project

| -- /public/                             -> frontend webapp
     | -- angular.json
     | -- package.json
     | -- Dockerfile
     | -- /src
            | -- /app/                    -> contains views/components/services/shared for website.

| -- /server/                             -> backend webapi
    | -- app.js                           -> backend entry point running expressjs
    | -- Dockerfile
    | -- package.json

```

## Launching the docker version

### Start the dockerized version

You can configure some environment variables in the .env file. Then, you can have a preview of the parameters injected:

```
docker-compose config
```

At the root of the solution, run the command :

```
launch.bat up
```


It will docker-compose to build + run full stack (can take a moment while building).

It will open in the browser:
- the frontend webapp (port 80)
- the backend webapi (port 30001).

### Stop the dockerized version

```
launch.bat down
```

### Run the release version

It uses docker images hosted in Docker Hub Registry (fastest way as images are already built).

They are compatible with for **Linux OS**.

```
docker-compose -f docker-compose-release.yml up
```


|  Docker images                      | Docker Repository                                                                | Description
| :-----------------------------------------------------: | -------------------------------------------------------------| ---------------------------------
| mongo:latest                        | [link](https://hub.docker.com/_/mongo)                                           | Mongo Database (official)
| danmgs/weather-app-frontend:1.1     | [link](https://hub.docker.com/repository/docker/danmgs/weather-app-frontend)     | Angular WebApp
| danmgs/weather-app-frontend:1.1     | [link](https://hub.docker.com/repository/docker/danmgs/weather-app-frontend)     | WebApi using Node.js/Express.js


### Instructions for deployment in the cloud

- AZURE : create a web app in multi-container mode, use file **docker-compose-release.yml**
- AWS   : create a web app via Elastic Beanstalk interface, in multi-container mode, use file **Dockerrun.aws.json**


## Frontend WebApp + Backend WebApi : Walkthrough

You can read the README from folder [public](https://github.com/danmgs/My-weather-app/tree/master/public) or [server](https://github.com/danmgs/My-weather-app/tree/master/server) respectively.



