const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 200 : 'OK' });
    res.end('<h1>Hello Node!!!!</h1>\n');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});