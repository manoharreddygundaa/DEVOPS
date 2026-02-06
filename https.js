//1 => http
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js Server");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:3000");
});
//2 fs
const fs = require("fs");
// Write to a file
fs.writeFileSync("sample.txt", "Hello from Node.js");
// Read the file
const data = fs.readFileSync("sample.txt", "utf8");
console.log(data);
//3 path
const path = require("path");
console.log("File name:", path.basename(__filename));
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));
//4 os
const os = require("os");

console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
//5 url
const { URL } = require("url");

const myURL = new URL(
  "https://localhost:8080/path/name?year=2026&month=feb#top"
);

console.log("Host:", myURL.host);
console.log("Pathname:", myURL.pathname);
console.log("Query Params:");

for (const [key, value] of myURL.searchParams) {
  console.log(`${key}: ${value}`);
}