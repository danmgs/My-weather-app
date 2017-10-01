const WeatherFavAddressController = require('../controllers/weatherFavAddress_controller');

module.exports = (app) => {
  app.post('/api/weatherFavAddress', WeatherFavAddressController.create);
  app.put('/api/weatherFavAddress/:id', WeatherFavAddressController.edit);
  app.delete('/api/weatherFavAddress/:id', WeatherFavAddressController.delete);
  app.get('/api/weatherFavAddress', WeatherFavAddressController.index);

  app.get('/api/getGeoCode', WeatherFavAddressController.getGeoCode);
  app.post('/api/getWeather/:lat/:lng', WeatherFavAddressController.getWeather);
};
