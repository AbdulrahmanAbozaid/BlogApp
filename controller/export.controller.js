const blogRepo = require("../model/blog/blog.repo");
const fs = require("fs");
const path = require("path");

// Methods
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

exports.exportBlogs = async (req, res) => {
  try {
    let { records } = await blogRepo.list({});
    const csvWriter = createCsvWriter({
      path: "blogs.csv",
      header: [
        { id: "_id", title: "ID" },
        { id: "title", title: "Title" },
        { id: "description", title: "Description" },
      ],
    });
    csvWriter.writeRecords(records).then(() => {
      res.download(path.join(__dirname, "../blogs.csv"), (err) => {
        fs.unlinkSync(path.join(__dirname, "../blogs.csv"));
        console.log("Done...");
      });
    });
  } catch (error) {
    console.log("exportBlogs Error: " + error.message);
    res.status(500).json({ error: error.message });
  }
};
