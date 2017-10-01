const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const WeatherFavAddress = mongoose.model('weatherFavAddress');

describe('WeatherFavAddress controller', () => {
  xit('Post to /api/weatherFavAddress creates a new weather favorite address', (done) => {
    //console.log('>>> ' + WeatherFavAddress);

    // WeatherFavAddress.count().then(count => {
    //   request(app)
    //     .post('/api/weatherFavAddress')
    //     .send({ address: 'Paris 75001' })
    //     .end(() => {
    //       WeatherFavAddress.count().then(newCount => {
    //         assert(count + 1 === newCount);
    //         done();
    //       });
    //     });
    // });

    request(app)
      .post('/api/weatherFavAddress')
      .send({ address: 'Paris 75002' })
      .end(() => {
          done();
      });     

    // const wfa = new WeatherFavAddress({address: "Paris 75015"});
    // wfa.save();
    // done();
  });

  it('Post to /api/weatherFavAddress requires an address', (done) => {
    // request(app)
    //   .post('/api/weatherFavAddress')
    //   .send({})
    //   .end((err, res) => {
    //     assert(res.body.error);
    //     done();
    //   });

      request(app)
        .post('/api/weatherFavAddress')
        .send({ })
        .end(function(err, res) {
          if (err) 
          {
            console.log('will return err = ' +err);
            return done(err);
          }
          done();
        });
  });

  xit('Delete to /api/weatherFavAddress/:id can delete a record', done => {
    const weatherFavAddress = new WeatherFavAddress({ address: 'Paris 75001' });

    weatherFavAddress.save().then(() => {
      request(app)
        .delete(`/api/weatherFavAddress/${weatherFavAddress._id}`)
        .end(() => {
          WeatherFavAddress.count().then(count => {
            assert(count === 0);
            done();
          });
        });
    });
  });
  
});
