// Khai bao module 'http'
const http = require("http");
// Khai bao hostname, port number cho web server
const hostname = "localhost";
const port = 9999;

// Su dung module http tao 1 web server
const server = http.createServer((req, res) => {
    // Doc thong tin headers cua client gui request toi server
    console.log(req.headers);
    // Thiet lap thong tin cho doi tuong response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Welcome to Web server - NodeHTTP</h1></body></bodt></html>");
});

// Lang nghe cac request tu clients gui yeu cau lam viec voi Web server
server.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
});

