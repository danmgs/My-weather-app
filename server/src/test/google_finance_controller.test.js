const assert = require('assert');
const request = require('supertest');
const app = require('../app');

xdescribe('Google Finance controller', () => {

    it('Get /api/finance/quotes get the historical quotes', (done) => {

        request(app)
            .get('/api/finance/quotes?symbol=NASDAQ:AAPL&from=2014-01-01&to=2014-12-31')
            .end((err, res) => {
                //console.log(res.body);
                assert(res.statusCode === 200);
                assert(res.body[0].symbol == 'NASDAQ:AAPL');
                done();
            });
    });

    it('Get /api/finance/companynews get the compagny news', (done) => {

        request(app)
            .get('/api/finance/companynews?symbol=NASDAQ:AAPL')
            .end((err, res) => {
                // console.log(res.body);
                assert(res.statusCode === 200);
                assert(res.body[0].symbol == 'NASDAQ:AAPL');
                done();
            });
    });
});
