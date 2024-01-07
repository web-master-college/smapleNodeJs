const http = require('http')
const fs = require('fs');
const url = require('url');
const page = require('./page');

const PORT = 9000;

//1.  http://localhost:9000/courses/html
//2.  http://localhost:9000/search?item=flowers&amount=2
//3.  http://localhost:9000/user/account?userName=david

const server = http.createServer((request, respnse) =>{
    respnse.write(page.html);

    respnse.end();
});

server.listen(PORT);