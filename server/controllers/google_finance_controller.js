const request = require('request');
var googleFinance = require("google-finance")

module.exports = {

    getQuotes(req, res, next) {

        const { symbol, from, to } = req.query;

        console.log(`symbol = ${symbol}, from = ${from}, to = ${to}`);

        googleFinance.historical({
            symbol,
            from,
            to
          }, function (err, quotes) {
            //console.log(quotes);
            res.send(quotes);
          });

    }
};
