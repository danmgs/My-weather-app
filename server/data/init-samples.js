const mongoose = require('mongoose');

const url = `${process.env.ENV_SERVER_API_MONGODB_URI}/weatherapp`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });
