const request = require('request');
request(
    {
        url:
            'http://maps.googleapis.com/maps/api/geocode/json?address=jolly%20grant%20dehradun',
        json: true
    },
    (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
    }
);
