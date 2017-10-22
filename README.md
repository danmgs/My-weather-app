# My Weather App (2017)

A WEB application providing weather information.


# <span style="color:green">BACKEND</span>

To start the server (<b>server</b> folder):

1. Launch mongod.exe locally :
`
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
`

2. To start backend server:
```
cd server
npm start
```

3. Once started, to test server urls api :
```
http://localhost:3000/api/users
```

4. To launch unit tests (server must be shutdown, i.e no "<b>npm start</b>"), <b>make sure mongodb is started</b>.
```
cd server
npm test
```

---------------------------------------------------------------


# <span style="color:green">FRONTEND</span>

0. To start client website :
```
cd public
npm start
```

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