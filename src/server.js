const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const methodOverride = require("method-override");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
server.listen(port, () => {
  console.log("Server is running");
});
