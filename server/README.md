# Backend WebApi (Server) - Walkthrough

## Running locally

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
http://localhost:30001/api/serverhealth
```

6. To launch unit tests (server must be shutdown, i.e no "**npm start**"), make sure mongodb is started.
```
cd server
npm test (or npm run test:noverbose for minimal logs.)
```