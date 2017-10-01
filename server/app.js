const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
// const WeatherFavAddress = require('./models/weatherFavAddress');
const routes = require('./routes/routes');
const app = express();

// API file for interacting with MongoDB
const api = require('./routes/api');

console.log(`Starting server from ${__dirname} ...`);

mongoose.Promise = global.Promise;
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV !== 'test') {
    console.log('PROD Config');
    mongoose.connect('mongodb://localhost/weatherapp', { useMongoClient: true });
}
else
{
    console.log('TEST Config');
}

// Parsers
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);
routes(app);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = app;
