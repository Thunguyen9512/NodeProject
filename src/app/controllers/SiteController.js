/* NewsController.js */

const Course = require("../models/Course");

class SiteController {
  // [GET] /home
  home(req, res, next) {
    /* use promise */
    Course.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject()); //new version of mongoose do not accept access the object directly, so we have to do this
        res.render("home", { courses });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
