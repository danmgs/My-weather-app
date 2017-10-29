const WeatherController = require('../controllers/weather_controller');
const GeoController = require('../controllers/geo_controller');
const GoogleFinanceController = require('../controllers/google_finance_controller');
const NewsController = require('../controllers/news_controller');

module.exports = (app) => {

  // Dark Sky Weather API
  app.post('/api/weather/:lat/:lng', WeatherController.getForecast);
  app.post('/api/weather/favorites', WeatherController.create);
  app.put('/api/weather/favorites/:id', WeatherController.edit);
  app.delete('/api/weather/favorites/:id', WeatherController.delete);
  app.get('/api/weather/favorites/:address?', WeatherController.getFavorites);
  app.get('/api/weather/favorites/active/:active', WeatherController.getActive);
  app.post('/api/weather/favorites/check', WeatherController.createIfNotExist);

  // Geo API
  app.get('/api/geo', GeoController.getGeoCode); 

  // Google finance API
  app.get('/api/finance/quotes', GoogleFinanceController.getQuotes);
  app.get('/api/finance/companynews', GoogleFinanceController.getCompanyNews);  

    // Node News API
    app.get('/api/news/articles', NewsController.getArticles); 
    app.get('/api/news/sources', NewsController.getSources); 
};
