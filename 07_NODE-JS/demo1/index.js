const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
    const pa
}



const http = require('http');
const options = {
    host: 'localhost', port: '8081', path: '/test.html'
};
const callback = function (response) {
// Callback function is used to deal with response
    let body = "";
    response.on('data', function (data) {
        body += data;
    });
    response.on('end', function () {
        console.log(body);
    });
    response.on('error’, (error) => {

    console.error(error);
});
};
const req = http.request(options, callback);
req.end();

