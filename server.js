//import http from 'http';
let http = require("http");
let fs = require("fs");

http
    .createServer((req, res) => {
        fs.readFile('response.html', (err,data) => {
            if(!err) {
                res.writeHead(200, {
                    "Content-Type": "text/html",

                })
                res.write(data);
                return res.end();
            } 
            console.error(err)
            res.write("error while reading file");
            return res.end();
        })
    })
    .listen(8080);