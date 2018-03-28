const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp(){
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connnection', socket => {
    socket.id = counter++;
    //sockets[socket.id] = socket;

    console.log(`Client connected.`);
    console.log('Please type your name:');
    
    socket.on('data', data => {
        if(!sockets[socket.id]){
            socket.name = data.toString().trim();
            cosket.write(`Welcome ${socket.name}! \n`);
            sockets[socket.id] = socket;
            return
        }
        Object.entries(sockets).forEach(([key, soket]) => {
            if(socket.id == key) return;
            soket.write(`${soket.name}: ${tiimestamp()}: `);
            soket.write(data);
        });
    });

    socket.on('end', () => {
        console.log(`Disconnecting client: ${socket.id}`)
        delete sockets[socket.id];
        console.log('Client disconnected.');
    });
});

server.listen(8080, () => console.log('Server started listening on port 8080.'));