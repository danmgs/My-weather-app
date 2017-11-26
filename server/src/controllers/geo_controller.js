const request = require('request');

module.exports = {

    getGeoCode(req, res, next) {

        const { address } = req.query;

        var encodedAddress = encodeURIComponent(address);

        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
        // console.log('getGeoCode', url);

        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                console.log('Unable to connect to Google map server.');
            } else if (response.statusCode === 400) {
                console.log('Unable to fetch geocode.');
            } else if (response.statusCode === 200) {
                // Calling getGeoCode with https://maps.googleapis.com/maps/api/geocode/json?address=Marseille%20sud
                // { error_message: 'You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://
                // console.developers.google.com/apis/credentials?project=_',
                //   results: [],
                //   status: 'OVER_QUERY_LIMIT' }
                //console.log(body);
            }
            res.send(body.results[0]);
        });
    }
};
