const fs = require('fs')
const url = require('url')
const path = require('path')
const mime = require('./mine')
const Result = require('./result')
const { getFile } = require('./util');

const headers = {
    'Access-Control-Allow-Origin': '*', // 允许跨域
    'Content-Type': 'text/plain'
  }
  
  const processRequest = (request, response) => {
  
    // 根据请求 url，转换为本地磁盘路径
    const url = getFile(request.url);
    let file = path.resolve(__dirname, url);

    response.end(Result.success({url: request.url}));

    
  }
  
  module.exports = processRequest