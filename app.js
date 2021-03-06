const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address of the place to fetch the weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h').argv;

geocode.getAddress(
    encodeURIComponent(argv.address),
    (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(results, undefined, 2));
        }
    }
);
