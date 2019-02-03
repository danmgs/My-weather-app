const mongoose = require('mongoose');

const url = `${process.env.MONGODB_URI}/weatherap`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });
