// https://nodejs.org/api/http.html
const http = require('http');

const options = {
    host: 'localhost',
    port: '8081',
    path: '/toto.html'
}

const callback = function (response) {
    // callback function is used to deal with response
    let body = '';
    response.on('data', function (data) {
        body += data;
    })
    response.on('end', function () {
        console.log(body);
    })
    response.on('error', (error) => {
        console.error(error);
    });
}

const req = http.request(options, callback);
req.end();