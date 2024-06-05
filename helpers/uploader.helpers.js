const multer = require("multer");

exports.uploadImage = (folderName) => {
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `uploads/${folderName}`);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.trunc(Math.random() * 1e5);
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });

  return multer({ storage });
};
