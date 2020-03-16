const routesFinance = require('./routes_finance');
const routesGeo = require('./routes_geo');
const routesNews = require('./routes_news');
const routesWeather = require('./routes_weather');
const routesServerHealth = require('./routes_server_health');

module.exports = (app) => {
  routesFinance(app);
  routesGeo(app);
  routesNews(app);
  routesWeather(app);
  routesServerHealth(app);
};
