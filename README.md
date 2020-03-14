# MY WEB APP - MEAN STACK

A WEB application providing weather, news, financial information.


![alt capture1](https://github.com/danmgs/My-weather-app/blob/master/public/img/screenshot1.JPG)

![alt capture2](https://github.com/danmgs/My-weather-app/blob/master/public/img/screenshot2.JPG)

# Backend Server

The backend is implemented with NodeJS using:
- ExpressJs to expose APIs
- Mongooseto to store data
- Mocha for unit tests.

To start the server (**server** folder):

1. Launch mongod.exe locally :
`
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --port 27017 --dbpath C:\data\db
`

2. Install packages:
```
cd server
npm install
```

3. Generate and configure API keys:

- Google Map API

- News API
https://newsapi.org

- Weather API
 https://darksky.net/


Put these key into the **.env** file
```
API_KEY_DARKSKY=xxxxxx
API_KEY_NEWS=yyyyyy
```

4. To start backend server:
```
# in server directory
npm start
```

5. Once started, to test server urls api :
```
http://localhost:3000/api/users
```

6. To launch unit tests (server must be shutdown, i.e no "**npm start**"), make sure mongodb is started.
```
cd server
npm test (or npm run test:noverbose for minimal logs.)
```

# Frontend WebApp

The frontend is implemented with Angular.

1. Install packages:
```
cd public
npm install
```

2. To start client website :
```
# in public directory
npm start
```

The website will reach the server URL configured in file **public\src\environments\environment[Prod].ts**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# <span style="color:red">TASKS LIST</span>

- [x] CORS issue between backend / frontend:  No 'Access-Control-Allow-Origin' header is present on the requested resource. 
 [Help jsonp here](https://codecraft.tv/courses/angular/http/jsonp-with-observables/).
- [ ] Langages fr/eng for web pages.
- [ ] Reorganize menu labels Weather, Finance ...
- [ ] Listing of weather on favorites: show weather only for active favorite addresses.
- [ ] Edit Favorite weather active/notactive status.
- [ ] Add creation timestamp (mongodb id based) on display all Favorites page.
- [ ] Check inputs from end-users (control + validation)
- [ ] Identify Root Case for Momentjs issue (deprecated) on server side (Quote page)
- [ ] Format publishedAt info for News Article Page (momentjs)
