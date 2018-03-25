const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {};
        this.taskId = 1;
        // The next line won't run as expected
        //this.emit('response', 'Type a command (help to list commands)');
        //SO using nextTick()
        process.nextTick(() => {
            this.emit('response', 'Type a command (help to list commands)');
        })
        //this.emit('response', 'Type a command (help to list commands)');
        client.on('command', (command, args) => {
            //console.log(`Command: ${command}`);
            switch (command) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command!')
                    break;
            }
        });
    }
    help() {
        this.emit('response', `Available commands:
        add task
        ls
        delete :id`);
    }

    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    }

    ls() {
        this.emit('response', `Tasks:\n${this.taskString()}`);
    }
    delete(args) {
        delete(this.tasks[args[0]]);
        this.emit('response', `Deleted task ${args[0]}`);
    }

    taskString() {
        return Object.keys(this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`;
        }).join('\n');
    }
}

module.exports = (client) => new Server(client);