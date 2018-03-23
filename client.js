const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    outpt: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

server.on('response', (resp) => {
    //console.log(`Response: ${resp}`)
    process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(resp);
    process.stdout.write('\n\> ');
});

rl.on('line', (input) => {
    //console.log(input);
    client.emit('command', input);
});