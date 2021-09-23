const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  decription: String,
  image: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);  //model name "Course" will convert to "courses" to get data form db
