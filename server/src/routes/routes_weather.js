const WeatherController = require('../controllers/weather_controller');

module.exports = (app) => {
  // Dark Sky Weather API
  // Routes order below is important !
  app.post('/api/weather/favorites/check', WeatherController.createIfNotExist);
  app.post('/api/weather/:lat/:lng', WeatherController.getForecast);
  app.post('/api/weather/favorites', WeatherController.create);
  app.put('/api/weather/favorites/:id(\\d+)/', WeatherController.edit);
  app.delete('/api/weather/favorites/:id(\\d+)/', WeatherController.delete);
  app.get('/api/weather/favorites/:address?', WeatherController.getFavorites);
  app.get('/api/weather/favorites/active/:active', WeatherController.getActive);
};
