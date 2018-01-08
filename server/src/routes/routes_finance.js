const GoogleFinanceController = require('../controllers/google_finance_controller');

module.exports = (app) => {
  // Google finance API
  app.get('/api/finance/quotes', GoogleFinanceController.getQuotes);
  app.get('/api/finance/companynews', GoogleFinanceController.getCompanyNews);
};
