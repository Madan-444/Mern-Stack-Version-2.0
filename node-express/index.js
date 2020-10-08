const express = require('express');
const http = require('http')

const hostname = 'localhost'
const port = 3300;
const app = express();

app.use((req,res,next)=> {
    console.log(req.headers)
    res.statuscode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1> This is an express server</h1></body></html>')
});

const server = http.createServer(app);
server.listen(port,hostname,()=> {
    console.log(`Server is running at http://${hostname}:${port}`)
})