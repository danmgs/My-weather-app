const ServerHealthController = require('../controllers/server_health_controller');

module.exports = (app) => {
    // Node Server Health Checker API
    app.get('/api/serverhealth', ServerHealthController.check);
};
