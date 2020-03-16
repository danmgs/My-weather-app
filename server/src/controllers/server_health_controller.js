const request = require('request');

module.exports = {

    check(req, res) {
        res.send({ status: 'up', text: 'Server is up and running' });
    }
};
