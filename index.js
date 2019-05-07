var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', err => { throw err; })
        .on('response', response => {
            console.log(`
            Response code : ${response.statusCode}
            Response message: ${response.statusMessage}
            Content Type: ${response.headers['content-type']}
            `);
            console.log('Downloading image...')
        })
        .pipe(fs.createWriteStream('./future.jpg')
        .on('finish', () => {
            console.log('Download Complete')
        }));