const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('News controller', () => {
    it('Get /api/news/articles get the articles', (done) => {
        request(app)
            .get('/api/news/articles?source=the-next-web&sortBy=latest')
            .end((err, res) => {
                // console.log(res.body);
                assert(res.statusCode === 200);
                assert(res.body !== null);
                done();
            });
    });

    it('Get /api/news/sources get the sources', (done) => {
        request(app)
            .get('/api/news/sources?language=en&category=general&country=us')
            .end((err, res) => {
                // console.log(res.body);
                assert(res.statusCode === 200);
                assert(res.body !== null);
                done();
            });
    });
});
