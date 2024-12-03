const { createServer } = require('node:http'); // node.js 

// const hostname = '127.0.0.1'; //local host
const hostname = 'localhost'; //local host
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World with Vanhbeti\n Newproject');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});