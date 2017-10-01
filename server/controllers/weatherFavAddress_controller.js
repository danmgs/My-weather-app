const WeatherFavAddress = require('../models/WeatherFavAddress');

module.exports = {
  index(req, res, next) {
    // const { lng, lat } = req.query;

    console.log('Calling index ..........');

    //const { address } = req.query

    //console.log('weatherFavAddress_controller > index is called with ' + address);

    // WeatherFavAddress.findOne({address: address})
    //   .then(items => res.send(items))
    //   .catch(next);

    WeatherFavAddress.findOne({ address: 'Paris' })
      .then(items => { console.log(items); return res.send(items); })
      .catch(next);

    // WeatherFavAddress.find({ _id: itemId }, itemProps)
    // .then(() => WeatherFavAddress.findById({ _id: id }))
    // .then(item => res.send(item))
    // .catch(next);


  },

  create(req, res, next) {
    const itemProps = req.body;

    // console.log('weatherFavAddress_controller > create is called with ' + itemProps);

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

    // console.log('weatherFavAddress_controller > delete is called with ' + itemId);

    WeatherFavAddress.findByIdAndRemove({ _id: itemId })
      .then(item => res.status(204).send(item) )
      .catch(next);
  }
};
