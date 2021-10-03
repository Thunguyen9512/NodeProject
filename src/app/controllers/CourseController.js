const Course = require("../models/Course");

class CourseController {
  // [GET] / news
  index(req, res) {
    res.send("Course page: not style");
    //res.render("courses"); //render news view from "./views/news.handlebar"
  }
  show(req, res, next) {
    const slug = req.params.slug; //get slug form URL
    //find in database with object match object.slug = slug
    Course.findOne({ slug: slug })
      .then((course) => {
        course = course.toObject();
        res.render("./courses/show", { course }); //pass value to render
      })
      .catch(next);
    //res.send("course");
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("./courses/create");
  }

  //[POST] /course/store
  store(req, res, next) {
    //res.json(req.body)
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`; //conver youtube videoId to thumble image
    const course = new Course(formData); // create new object course of Course class and have property = formData
    course.save(); // write data to db with save() method ( mongoose method)
    res
      .redirect("/me/stored/courses") //redirect to homepage
      .then(next);
  }
}

module.exports = new CourseController();
