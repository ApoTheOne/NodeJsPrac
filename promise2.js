const request = require('request');

var geocodeAddress = address => {
    return new Promise((resolve, reject) => {
        request(
            {
                url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
                json: true
            },
            (error, response, body) => {
                if (error) {
                    reject(`Oops : ${error}`);
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('Address not found.');
                } else if (body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        Lat: body.results[0].geometry.location.lat,
                        Lng: body.results[0].geometry.location.lng
                    });
                }
            }
        );
    });
};

geocodeAddress('248001').then(
    location => {
        console.log(JSON.stringify(location, undefined, 2));
    },
    errorMessage => {
        console.log(errorMessage);
    }
);
