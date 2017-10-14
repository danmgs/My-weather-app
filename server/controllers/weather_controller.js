const WeatherFavAddress = require('../models/WeatherFavAddress');

const request = require('request');

module.exports = {

  getWeather(req, res, next) {

    const { lat, lng } = req.params;

    const url = `https://api.darksky.net/forecast/3ef106162ed142fc3dc78e058263e0e8/${lat}\,${lng}`;
    console.log(`Calling getWeather with ${url}`);

    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log('Unable to connect to Forecast.io server.');
      } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather.');
      } else if (response.statusCode === 200) {
        console.log(`=> temperature : ${body.currently.temperature}`);
      }
      res.send(response);
    });
  },

  index(req, res, next) {

    console.log(`Calling index .......... req.params.address=${req.params.address}`);

    if (req.params.address != null) {
      console.log('Calling index findOne');
      WeatherFavAddress.findOne({ address: req.params.address })
        .then(item => { console.log(item); return res.send(item); })
        .catch(next);
    }
    else {
      console.log('Calling index find');
      WeatherFavAddress.find({})
        .then(items => { console.log(items); return res.send(items); })
        .catch(next);
    }
  },

  create(req, res, next) {
    const itemProps = req.body;

    // console.log('weather_controller > create is called with ' + itemProps);
    WeatherFavAddress.create(itemProps)
      .then(item => res.send(item))
      .catch(next)
  },

  createIfNotExist(req, res, next) {
    const itemProps = req.body;

    console.log('*******************');
    WeatherFavAddress.findOne(itemProps)
      .then(item => {
        console.log('found ?  ' + item);
        // console.log(item); 
        if (item === null) {
          console.log('weather_controller > createIfNotExist (item not found, will create one) is called with ' + JSON.stringify(itemProps));
          WeatherFavAddress.create(itemProps)
            .then(itemcreated => res.send(itemcreated))
            .catch(next)
        }
        else {
          console.log('weather_controller > createIfNotExist (item found, will not create one) is called with ' + JSON.stringify(itemProps));
          res.send(null);
        }
      })
      .catch(next);
  },

  edit(req, res, next) {
    const itemId = req.params.id;
    const itemProps = req.body;

    WeatherFavAddress.findByIdAndUpdate({ _id: itemId }, itemProps)
      .then(() => WeatherFavAddress.findById({ _id: id }))
      .then(item => res.send(item))
      .catch(next);
  },

  delete(req, res, next) {
    const itemId = req.params.id;

    console.log('weather_controller > delete is called with ' + itemId);

    WeatherFavAddress.findByIdAndRemove({ _id: itemId })
      .then(item => res.status(204).send(item))
      .catch(next);
  },

};
