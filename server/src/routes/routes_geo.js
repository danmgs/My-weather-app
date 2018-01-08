const GeoController = require('../controllers/geo_controller');

module.exports = (app) => {
  // Geo API
  app.get('/api/geo', GeoController.getGeoCode);
};
