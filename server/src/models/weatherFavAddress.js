const mongoose = require('mongoose');

const { Schema } = mongoose;

const WeatherFavAddressSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  active: { type: Boolean, default: true }
});

const WeatherFavAddress = mongoose.model('weatherFavAddress', WeatherFavAddressSchema);

module.exports = WeatherFavAddress;
