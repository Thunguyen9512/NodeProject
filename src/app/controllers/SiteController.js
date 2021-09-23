/* NewsController.js */

const Course = require("../models/Course");

class SiteController {
  // [GET] /home
  home(req, res) {
    //res.render("home"); //render news view from "./views/news.handlebar"
    //acess to db
    Course.find({}, (err, courses) => {
      console.log("courses", courses);
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
