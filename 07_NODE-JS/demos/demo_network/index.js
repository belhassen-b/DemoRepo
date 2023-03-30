// Demo Network
// https://nodejs.org/api/net.html 

const net = require("net");

// Création de mon server
const server = net.createServer(function(connection) {
    console.log('Client connected.'); // j'indique dans la console une connection cliente
    connection.on('end', function() { // quand la requete client est fini j'affiche 'Client disconnected.'
        console.log('Client disconnected.');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
// renvoie les données à l'objet de connexion qui est le client
})


// mon server est à disposition sur le port 8081
server.listen(8081, function(){  // Port 8081 car 8080 déja utilisé par TomCat
    console.log('Server is listening sur port 8081.');
});

//console.log('Server Program Ended');

// CTRL + C pour teminer le programme

// Fin partie server

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

