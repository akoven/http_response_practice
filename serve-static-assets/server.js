const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  const indexFile = fs.readFileSync('./index.html', 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(indexFile);
});


const port = 5002;

server.listen(port, () => console.log('Server is listening on port', port));
