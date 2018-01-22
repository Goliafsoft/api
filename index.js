const http = require('http');
const port = 3002;

const requestHandler = (request, response) => {
  response.end('api');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`server is listening on ${port}`)
});