const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/weatherapp_test', { useMongoClient: true });
  mongoose.connection
    .once('open', () => { 
      console.log('Connect to mongodb successfully !'); 
      done();
    })
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  const { weatherfavaddresses } = mongoose.connection.collections; // i.e const weatherFavAddress = mongoose.connection.collections.weatherFavAddress;
  weatherfavaddresses.drop()
    // .then(() => weatherfavaddresses.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
    .then(() => done())
    .catch(() => done());

  // console.log(mongoose.connection.collections);
});
