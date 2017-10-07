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
    // const { lng, lat } = req.query;

    console.log('Calling index ..........');

    //const { address } = req.query

    //console.log('weather_controller > index is called with ' + address);

    // WeatherFavAddress.findOne({address: address})
    //   .then(items => res.send(items))
    //   .catch(next);

    WeatherFavAddress.find({ })
      .then(items => { console.log(items); return res.send(items); })
      .catch(next);

    // WeatherFavAddress.find({ _id: itemId }, itemProps)
    // .then(() => WeatherFavAddress.findById({ _id: id }))
    // .then(item => res.send(item))
    // .catch(next);
  },

  create(req, res, next) {
    const itemProps = req.body;

    // console.log('weather_controller > create is called with ' + itemProps);

    WeatherFavAddress.create(itemProps)
      .then(item => res.send(item))
      .catch(next)
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
  }
};
