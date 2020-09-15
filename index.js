const http = require('http');
const fs = require('fs');
const processRequest = require('./server')


const hostname = '127.0.0.1';
const port = 3000;
const root = __dirname

const server = http.createServer(async (req, res) => {
    console.log(root);
    processRequest(req, res)
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});