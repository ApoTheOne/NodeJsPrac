const request = require('request');

module.exports.getAddress = function getAddress(address) {
    request(
        {
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        },
        (error, response, body) => {
            if (error) {
                console.log(`Oops : ${error}`);
            } else if (body.status === 'ZERO_RESULTS') {
                console.log('Address not found.');
            } else if (body.status === 'OK') {
                console.log(`Address : ${body.results[0].formatted_address}`);
                console.log(
                    `Lat: ${body.results[0].geometry.location.lat}, Lng: ${
                        body.results[0].geometry.location.lng
                    }`
                );
            }
        }
    );
};
