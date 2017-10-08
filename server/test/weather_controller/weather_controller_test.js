const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const WeatherFavAddress = mongoose.model('weatherFavAddress');

describe('#Weather controller', () => {

  xit('Get to /api/weather/favorites get the weather favorites', (done) => {

    request(app)
      .post('/api/weather/favorites')
      .send({ address: 'Paris 75001' })
      .end(() => {
        request(app)
          .get('/api/weather/favorites')
          .end((err, res) => {
            assert(res.statusCode === 200);
            assert(res.error !== '');
            // console.log(res);
            done();
          });
      });
  });

  xit('Get to /api/weather/favorites/:address find a favorite address', (done) => {

    request(app)
      .post('/api/weather/favorites')
      .send({ address: 'Paris' })
      .end(() => {
        request(app)
          .get('/api/weather/favorites/Paris')
          .end((err, res) => {
            assert(res.statusCode === 200);
            assert(res.error !== '');
            done();
          });
      });
  });

  xit('Get to /api/weather/:lat/:lng get the weather', (done) => {

    request(app)
      .post('/api/weather/49/75')
      .end((err, res) => {
        assert(res.statusCode === 200);
        assert(res.body.body.latitude === 49);
        assert(res.body.body.longitude === 75);
        //console.log(res.body);
        done();
      });
  });

  xit('Post to /api/weather/favorites creates a new weather favorite address', (done) => {

    WeatherFavAddress.count().then(count => {
      request(app)
        .post('/api/weather/favorites')
        .send({ address: 'Paris 75001' })
        .end(() => {
          WeatherFavAddress.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });

    // const wfa = new WeatherFavAddress({address: "Paris 75015"});
    // wfa.save();
    // done();
  });

  xit('Post to /api/weather/favorites requires an address', (done) => {
    request(app)
      .post('/api/weather/favorites')
      .send({})
      .end((err, res) => {
        //console.log('will return res = ' + JSON.stringify(res, undefined, 2));
        assert(res.status === 500);
        done();
      });
  });

  it('Post to /api/weather/favorites/check creates a new weather favorite address when one is NOT already existing', (done) => {

    WeatherFavAddress.count().then(count => {
      request(app)
        .post('/api/weather/favorites')
        .send({ address: 'Paris 75001' })
        .end(() => {

          request(app)
            .post('/api/weather/favorites/check')
            .send({ address: 'Paris 75002' })
            .end(() => {
              WeatherFavAddress.count().then(newCount => {
                assert(count + 2 === newCount);
                done();
              });
            });
        });
    });
  });

  it('Post to /api/weather/favorites/check creates a new weather favorite address when one is already existing', (done) => {

    WeatherFavAddress.count().then(count => {
      request(app)
        .post('/api/weather/favorites')
        .send({ address: 'Paris 75001' })
        .end(() => {

          request(app)
            .post('/api/weather/favorites/check')
            .send({ address: 'Paris 75001' })
            .end(() => {
              WeatherFavAddress.count().then(newCount => {
                assert(count + 1 === newCount);
                done();
              });
            });
        });
    });
  });

  xit('Delete to /api/weather/favorites/:id can delete a record', done => {
    const weatherFavAddress = new WeatherFavAddress({ address: 'Paris 75001' });

    weatherFavAddress.save().then(() => {
      request(app)
        .delete(`/api/weather/favorites/${weatherFavAddress._id}`)
        .end((err, res) => {

          //console.log('>>>>> ' +JSON.stringify(res, undefined,2));
          WeatherFavAddress.count().then(count => {
            assert(count === 0);
            done();
          });
        });
    });
  });

});
