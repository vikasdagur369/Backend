const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("about my profile");
        break;
      case "/profile":
        res.end("profile section");
        break;

      default:
        res.end("error 404");
    }
  });
});
myServer.listen(8000, () => console.log("everything is fine"));
