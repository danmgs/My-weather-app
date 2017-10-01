const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost:27017/weatherapp_test', { useMongoClient: true });
  mongoose.connection
    .once('open', () => { 
      console.log('Connect to mongodb successfully !'); 
      done();
    })
    .on('error', error => {
      console.warn('Warning', error);
    });
});

// beforeEach(done => {
//   const { weatherFavAddress } = mongoose.connection.collections; // i.e const weatherFavAddress = mongoose.connection.collections.weatherFavAddress;
//   if(weatherFavAddress != undefined)
//   {
//     weatherFavAddress.drop()
//       // .then(() => weatherFavAddress.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
//       .then(() => done())
//       .catch(() => done());
//   }
// });
