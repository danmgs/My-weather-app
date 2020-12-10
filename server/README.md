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

Before using these templates, you need to generate some API keys:


|  API             |  Options              | Link                                                  |
| :--------------: | --------------------- | ----------------------------------------------------- | -----------
| Google Map API   |                       |                                                       | Mandatory
| News API         | ENV_API_KEY_DARKSKY   | [https://newsapi.org](https://newsapi.org)            | Mandatory
| Weather API      | ENV_API_KEY_NEWS      | [https://darksky.net/dev](https://darksky.net/dev)    | Mandatory


Configure your key's values into the **\server\\.env** file
```
ENV_API_KEY_DARKSKY=
ENV_API_KEY_NEWS=
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