const assert = require('assert');
const request = require('supertest');
const app = require('../app');

xdescribe('Geo controller', () => {

    it('Get /api/geo get the geo code', (done) => {

        request(app)
            .get('/api/geo?address=Paris')
            .end((err, res) => {
                assert(res.statusCode === 200);
                //console.log(res.body);
                assert(res.body.address_components[0].short_name === 'Paris');
                done();
            });

    });
});
