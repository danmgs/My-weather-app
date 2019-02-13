const mongoose = require('mongoose');

const url = `${process.env.MONGODB_URI}/weatherapp`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });
