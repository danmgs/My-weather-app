const mongoose = require('mongoose');
const WeatherFavAddress = require('../models/WeatherFavAddress');
const url = `mongodb:\/\/${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}\/weatherap`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });