const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Google Finance controller', () => {

    it('Get /api/quotes get the geo code', (done) => {

        request(app)
            .get('/api/quotes?symbol=NASDAQ:AAPL&from=2014-01-01&to=2014-12-31')
            .end((err, res) => {
                //console.log(res.body);
                assert(res.statusCode === 200);
                assert(res.body[0].symbol == 'NASDAQ:AAPL');
                done();
            });

    });
});
