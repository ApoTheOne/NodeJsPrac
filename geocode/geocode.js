const request = require('request');

let getAddress = (address, callback) => {
    request(
        {
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        },
        (error, response, body) => {
            if (error) {
                callback(`Oops : ${error}`);
            } else if (body.status === 'ZERO_RESULTS') {
                callback('Address not found.');
            } else if (body.status === 'OK') {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    Lat: body.results[0].geometry.location.lat,
                    Lng: body.results[0].geometry.location.lng
                });
            }
        }
    );
};
module.exports.getAddress = getAddress;
