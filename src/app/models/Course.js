const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  description: String,
  image: String,
  videoId: String,
  lever: String,
  slug: String,
  videoId: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

Course.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });  // add mongoose plugin and overrideMothod to just receive required data

module.exports = mongoose.model("Course", Course); //model name "Course" will convert to "courses" to get data form db
