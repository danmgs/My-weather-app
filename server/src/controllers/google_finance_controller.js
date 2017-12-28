const googleFinance = require('google-finance');

module.exports = {

    getQuotes(req, res, next) {
        const { symbol, from, to } = req.query;

        // console.log(`getQuotes symbol = ${symbol}, from = ${from}, to = ${to}`);

        googleFinance.historical({
            symbol,
            from,
            to
        }, (err, quotes) => {
            // console.log(quotes);
            if (!err) {
                res.send(quotes);
            } else next();
        });
    },

    getCompanyNews(req, res, next) {
        const { symbol } = req.query;

        googleFinance.companyNews({
            symbol
        }, (err, news) => {
            // console.log(news);
            if (!err) {
                res.send(news);
            } else next();
        });
    }
};
