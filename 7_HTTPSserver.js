const http = require("http");

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> This is Yogesh </h1> <p> This is not fine </p>");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
