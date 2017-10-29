const request = require('request');
// const news = require('node-news');

module.exports = {

    getArticles(req, res, next) {

        const { source, sortBy } = req.query;
        var apiKey = "a81b9a7c23394dcd9c6fc4a5bcf478ef";

        const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`;
        console.log(url);

        request({
            url: url,
            json: true
        }, (error, response, body) => {
            res.send(body.articles);
        });
    },

    getSources(req, res, next) {

        const { language, category, country } = req.query;

        const url = `https://newsapi.org/v1/sources?language=${language}&category=${category}&country=${country}`;
        console.log(url);

        request({
            url: url,
            json: true
        }, (error, response, body) => {
            res.send(body.sources);
        });
    }
};
