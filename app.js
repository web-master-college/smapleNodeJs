const http = require('http')
const fs = require('fs');
const PORT = 9000;

const server = http.createServer((request, respnse) =>{
    // run when there is a new request
    respnse.write("Hello World");
    respnse.end();
});

server.listen(PORT);

/*

fs.writeFile('./text.json', JSON.stringify({a: 1, b:2}), {}, function(err){
    if(err){
        console.log('An error occured writing file', err);
    }
});

console.log('request start')
    console.log(request);
    console.log('request end')
*/
// const bar = require('./bar');


// console.log(bar.foo(7,8));

// console.log(bar.kefel(2,3));