const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/vegetables") {
        fs.readFile("Problem2vegetables.json", "utf-8", (error, data) => {
            res.end(data);
        })
    }
    else {
        res.end("page not found")
    }
})

server.listen(8080, () => {
    console.log("server was listning at port 8080");
})