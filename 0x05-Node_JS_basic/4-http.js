const app = require('http');

const port = 1245;

app
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.statusCode = 200;
    res.end();
  })
  .listen(port);
