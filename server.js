const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 8000;

http
    .createServer((req, res) => {
        fs.readFile("data.json", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/json" });
            res.write(data);
            return res.end();
        });
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    })
    .listen(PORT, () => {
        console.log('Server is running at port ' + PORT);
    });



