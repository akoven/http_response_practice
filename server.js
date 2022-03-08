//In class demo:

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{//creates an object "server"
    console.log(`${req.method} ${req.url}`);
    //response code:
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World!</h1>')
    res.end();//good practice to return res.end() for some scenarios
});//if any changes are made you must restart the server

const port = 5000;//setting a port to communicate to the server

server.listen(port, ()=>console.log('the server is listening on port ',port))//the server obj has the method "listen" applied to listen for the given port number
                                //*remember: curly braces are not necessary for single line code
