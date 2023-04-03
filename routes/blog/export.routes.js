const app = require("express").Router();
const controller = require("../../controller/export.controller");

app.get("/blogs", controller.exportBlogs);

module.exports = app;
