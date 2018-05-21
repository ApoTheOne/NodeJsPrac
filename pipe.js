const request = require('request');
const res = request('https://www.google.com');
res.pipe(process.stdout);