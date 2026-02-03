const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile("menubar.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 File Not Found");
      return;
    }
    res.end(data);
  });
}).listen(8080);

console.log("Server running at http://localhost:8080");
