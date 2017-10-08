const WeatherController = require('../controllers/weather_controller');
const GeoController = require('../controllers/geo_controller');

module.exports = (app) => {
  app.post('/api/weather/favorites', WeatherController.create);
  app.put('/api/weather/favorites/:id', WeatherController.edit);
  app.delete('/api/weather/favorites/:id', WeatherController.delete);
  // app.get('/api/weather/favorites', WeatherController.index);
  app.get('/api/weather/favorites/:address?', WeatherController.index);
  app.post('/api/weather/favorites/check', WeatherController.createIfNotExist);  

  app.get('/api/geo', GeoController.getGeoCode);
  app.post('/api/weather/:lat/:lng', WeatherController.getWeather);
};
