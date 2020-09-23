const http = require('http');
const fs = require('fs');
const processRequest = require('./server');


const hostname = '127.0.0.1';
const port = 8080;
const root = __dirname

const server = http.createServer(async (req, res) => {
    console.log(root);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234"); // 设置可访问的源
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); 
    res.setHeader("content-type", "application/json");
    processRequest(req, res)
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});