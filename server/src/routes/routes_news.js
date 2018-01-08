const NewsController = require('../controllers/news_controller');

module.exports = (app) => {
    // Node News API
    app.get('/api/news/articles', NewsController.getArticles);
    app.get('/api/news/sources', NewsController.getSources);
};
