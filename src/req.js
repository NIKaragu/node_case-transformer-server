/// !Created only for testing and training!
const http = require('http');

const data = JSON.stringify({
  msg: 'Hello world',
  time: new Date().toISOString(),
});

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 5700,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  res.setEncoding('utf8');

  let response = '';

  res.on('data', (chunk) => {
    response += chunk.toString() + '\n';
  });

  res.on('end', () => {
    console.log('Response from server:', response);
  });
});

req.on('error', (error) => {
  console.log(error);
});
req.write(data);
req.end();
