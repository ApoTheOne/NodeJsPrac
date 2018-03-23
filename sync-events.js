const EventEmitter = require('events');

class WithLog extends EventEmitter {
    execute(taskFunc){
        console.log('Before executing');
        this.emit('begin');
    }
}