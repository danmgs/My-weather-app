const mongoose = require('mongoose');
const WeatherFavAddress = require('../models/WeatherFavAddress');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/weatherapp', { useMongoClient: true });