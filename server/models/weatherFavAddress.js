const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherFavAddressSchema = new Schema({
  address: {
    type: String,
    required: true
  }
});

const WeatherFavAddress = mongoose.model('weatherFavAddress', WeatherFavAddressSchema);

module.exports = WeatherFavAddress;
