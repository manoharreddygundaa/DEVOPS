// 1
console.log("Hello World from Node.js");

// 2
const http = require('node:http');
http.createServer((req, res) => {
  res.end("Welcome to Node.js Server");
}).listen(3000);
console.log("Server running on port 3000");

// 3
let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 4
const fs = require('fs');
fs.writeFileSync("sample.txt", "This is a Node.js file");
console.log("File created successfully");

// 5
const syncData = fs.readFileSync("sample.txt", "utf-8");
console.log(syncData);

// 6
fs.readFile("sample.txt", "utf-8", (err, asyncData) => {
  if (err) {
    console.log("Error reading file");
    return;
  }
  console.log(asyncData);

  // 7
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter your name: ", (name) => {
    console.log("Hello " + name);

    // 8
    rl.question("Enter a number: ", (num) => {
      if (num % 2 === 0) console.log("Even Number");
      else console.log("Odd Number");

      // 9
      function factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) fact *= i;
        return fact;
      }
      console.log("Factorial:", factorial(5));

      // 10
      rl.question("Enter two numbers: ", (input) => {
        let [x, y] = input.split(" ").map(Number);
        console.log("Add:", x + y);
        console.log("Sub:", x - y);
        console.log("Mul:", x * y);
        console.log("Div:", x / y);

        // 11
        const date = new Date();
        console.log("Current Date & Time:", date.toLocaleString());
        rl.close();
      });
    });
  });
});
