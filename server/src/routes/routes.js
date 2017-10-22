const WeatherController = require('../controllers/weather_controller');
const GeoController = require('../controllers/geo_controller');
const GoogleFinanceController = require('../controllers/google_finance_controller');

module.exports = (app) => {
  app.post('/api/weather/favorites', WeatherController.create);
  app.put('/api/weather/favorites/:id', WeatherController.edit);
  app.delete('/api/weather/favorites/:id', WeatherController.delete);
  // app.get('/api/weather/favorites', WeatherController.index);
  
  app.get('/api/weather/favorites/:address?', WeatherController.index);
  app.get('/api/weather/favorites/active/:active', WeatherController.getActive);
  app.post('/api/weather/favorites/check', WeatherController.createIfNotExist);

  app.get('/api/geo', GeoController.getGeoCode);
  app.post('/api/weather/:lat/:lng', WeatherController.getWeather);

  // Google finance API
  app.get('/api/quotes', GoogleFinanceController.getQuotes);
  app.get('/api/companynews', GoogleFinanceController.getCompanyNews);  
};
