const app = require("express").Router();
const uploadController = require("../../controller/uploads.controller");
const { uploadImage } = require("../../helpers/uploader.helpers");
const upload = uploadImage("users");

app.put("/image/:_id", upload.single("image"), uploadController.uploadImage);

module.exports = app;
