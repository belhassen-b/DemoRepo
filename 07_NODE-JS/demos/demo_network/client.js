const net = require("net");

// Debut partie client 

const client = net.connect({port: 8081}, 'localhost', function() {
    console.log ('Connected to server.')
})

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
})

client.on('end', function () {
    console.log('Disconnected from server');
})

//console.log('Client Program Ended');

