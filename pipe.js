const request = require('request');
const fs = require('fs');
const zlib = require('zlib');

// const res = request('https://www.google.com');
// res.pipe(process.stdout);
//request('https://www.google.com').pipe(process.stdout);
//request('https://www.google.com').pipe(fs.createWriteStream('google.html'));
request('https://www.google.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('google.html.gz'));
