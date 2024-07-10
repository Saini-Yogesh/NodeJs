const http = require("http");

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  //   console.log(req);
  if (req.url == "/")
    res.end("<h1> This is Yogesh </h1> <p> This is not fine </p>");
  else if (req.url == "/about") {
    res.end("<h1>about</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>not find finf</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
