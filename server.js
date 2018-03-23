const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        // The next line won't run as expected
        //this.emit('response', 'Type a command (help to list commands)');
        //SO using nextTick()
        process.nextTick(() => {
            this.emit('response', 'Type a command (help to list commands)');
        })
        //this.emit('response', 'Type a command (help to list commands)');
        client.on('command', (command) => {
            //console.log(`Command: ${command}`);
            switch (command) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command]();
                    break;
                default:
                    this.emit('response', 'Unknown command!')
                    break;            }
        });
    }
    help() {
        this.emit('response', 'help: to get help....');
    }

    add() {
        this.emit('response', 'add: to add....');
    }
    
    ls() {
        this.emit('response', 'ls: to list....');
    }
    delete() {
        this.emit('response', 'delete: to delete....');
    }
}

module.exports = (client) => new Server(client);