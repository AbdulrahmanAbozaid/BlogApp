const userRepo = require("../model/user/user.repo");
const fs = require("fs");

exports.uploadImage = async (req, res) => {
  try {
    let { _id } = req.params;
    let images = req.files;
    let user = await userRepo.isExist({ _id });

    if (!user.error) {
      let = oldImage = user.record.image;
      if (oldImage) {
        fs.unlinkSync(oldImage.path);
      }

      const upload = await userRepo.update(_id, { image: images[0] });
      res.status(upload.code).json(upload);
    } else {
      res.status(user.code).json({ error: user.error });
    }
  } catch (error) {
    console.log("uploadImage error: " + error);
    res.status(500).json({ message: error.message });
  }
};
