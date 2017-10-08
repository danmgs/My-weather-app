const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

xdescribe('Geo controller', () => {

    it('Get to /api/geo get the geo code', (done) => {

        request(app)
            .get('/api/geo?address=Paris')
            .end((err, res) => {
                assert(res.statusCode === 200);
                assert(res.body.address_components[0].short_name === 'Paris');
                done();
            });

    });

});
