const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Server health controller', () => {
    it('Get /api/serverhealth check the server status', (done) => {
        request(app)
            .get('/api/serverhealth')
            .end((err, res) => {
                assert(res.statusCode === 200);
                // console.log(res.body);
                assert(res.body !== null);
                assert(res.body.status === 'up');
                assert(res.body.text === 'Server is up and running');
                done();
            });
    });
});
