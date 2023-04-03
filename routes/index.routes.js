const app = require("express").Router();

let blogs = require("./blog/blog.routes");
let users = require("./user/user.routes");
let exporter = require("./blog/export.routes");
const uploads = require("./user/uploads.routes");

app.use("/blogs", blogs);
app.use("/users", users);
app.use("/upload", uploads);
app.use("/export", exporter);

module.exports = app;
