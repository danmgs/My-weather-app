const routesFinance = require('./routes_finance');
const routesGeo = require('./routes_geo');
const routesNews = require('./routes_news');
const routesWeather = require('./routes_weather');

module.exports = (app) => {
  routesFinance(app);
  routesGeo(app);
  routesNews(app);
  routesWeather(app);
};
