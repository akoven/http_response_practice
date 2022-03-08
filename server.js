//In class demo:

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{//creates an object "server"
//     console.log(`${req.method} ${req.url}`);
//     //response code:
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World!</h1>')
//     res.end();//good practice to return res.end() for some scenarios
// });//if any changes are made you must restart the server

// const port = 5000;//setting a port to communicate to the server

// server.listen(port, ()=>console.log('the server is listening on port ',port))//the server obj has the method "listen" applied to listen for the given port number
                                //*remember: curly braces are not necessary for single line code


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.write( `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Hello World!</title>
//     </head>
//     <body>
//       <h1>Hello there!</h1>
//     </body>
//     </html>
//   `);
//     res.end();
// });

// const port = 5001;
// server.listen(port, () => console.log('Server is listening on port',port));

//setting route handlers:
// const server = http.createServer((req,res) =>{
//     console.log(`${req.method} ${req.url}`);

//     if(req.method === 'GET' && req.url === '/'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<h1>This is the homepage</h1>');
//         return res.end();
//     }

//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Invalid URL</h1>');
// });

// const port = 5002;
// server.listen(port, ()=> console.log('Server is listening on port',port));

//Reading the html file:

const http = require('http');
const fs = require('fs');

let dailyMessage = 'hello';
const server = http.createServer((req,res) => {
    if(req.method === 'GET' && req.url === '/'){
        const htmlPage = fs.readFileSync('index.html', 'utf-8');
    }
})
