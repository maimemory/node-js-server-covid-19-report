const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 8000;

http
    .createServer((req, res) => {
        fs.readFile("data.json", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        });
    })
    .listen(PORT, () => {
        console.log('Server is running at port ' + PORT);
    });



