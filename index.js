const http = require('http');
const _ = require('lodash');

const port = 8080;

const requestHandler = (request, response) => {
  response.end(_.capitalize('api'));
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`server is listening on ${port}`)
});