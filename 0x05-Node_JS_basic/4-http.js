const app = require('http');

const port = 1245;

app
  .createServer((req, res) => {
    res.write('Hello Holberton School!');
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end();
  })
  .listen(port);
