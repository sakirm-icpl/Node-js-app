const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/index.html', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '.')
  });
});

https.createServer({
  key: fs.readFileSync(path.join(__dirname,  'MYCERT.key')),
  cert: fs.readFileSync(path.join(__dirname,  'MYCERT.crt'))
}, app)
 .listen(443, function() {
    console.log('Example app listening on port 443! Go to https://127.0.0.1:3000/');
});
