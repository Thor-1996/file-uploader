const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const path = require("path");
const server = http.createServer();
const DIR = "Resources";

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }
  console.log(req.url);
  if (req.url === "/upload") {
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");

    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      const file = files.file;

      if (err) {
        res.end("err");
        return;
      }

      const ws = fs.createWriteStream(`./${DIR}/${file.name}`, {
        encoding: "binary",
      });
      ws.write(file);
      res.end("上传成功");
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");
    res.end("404路径错误");
  }
});

server.listen(3000, () => console.log("正在监听 3000 端口"));
