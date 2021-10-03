const { json } = require("express");
const Course = require("../models/Course");

class meController {
  // [GET] /me
  index(req, res) {
    res.send("Me page");
    //res.render("courses"); //render news view from "./views/news.handlebar"
  }

  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    /* use promise */
    Course.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject()); //new version of mongoose do not accept access the object directly, so we have to do this
        res.render("./me/storedCourses", { courses });
      })
      .catch(next);
  }

  // [GET] /me/stored/posts
  storedPosts(req, res) {
    res.send("Stored Post");
  }

  // [GET] /me/stored/:id/edit
  storedEdit(req, res, next) {
    const id = req.params.id;
    Course.findOne({ _id: id }) //  get the object with correct id
      .then((course) => {
        course = course.toObject();
        res.render("./me/storedEdit", { course }); //pass value to render
      })
      .catch(next);
  }

  // [POST] /me/stored/:id/delete"
  softDetelte(req, res, next) {
    const id = req.params.id;
    Course.delete({ _id: id })
      .then(() => {
        res.redirect("/me/stored/courses"); //redirect after success
      })
      .catch(next);
  }

  // [POST] /me/stored/:id/permanentDelete"
  permanentDetelte(req, res, next) {
    const id = req.params.id;
    Course.remove({ _id: id })
      .then(() => {
        res.redirect("/me/recycle/courses"); //redirect after success
      })
      .catch(next);
  }

  // [POST] /course/:id
  storedUpdate(req, res, next) {
    const id = req.params.id;
    Course.updateOne({ _id: id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses"); //redirect after success
      })
      .catch(next);
  }

  // [POST] /me/recycle/courses
  recycle(req, res, next) {
    Course.findDeleted() //  mongoose_delete plugin
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render("./me/recycleCourses", { courses }); //pass value to render
      })
      .catch(next);
  }

  // [POST] /me/stored/:id/restore"
  restore(req, res, next) {
    const id = req.params.id;
    Course.restore({ _id: id }) // mongoose-delete plugin method
      .then(() => {
        res.redirect("/me/recycle/courses"); //redirect after success
      })
      .catch(next);
  }
  // [POST] /me/stored/multiDelete
  storedMultiDetele(req, res, next) {
    const action = req.body.action;
    const idsToDelete = req.body.courseIds;
    switch (action) {
      case "delete":
        Course.delete({ _id: { $in: idsToDelete } })
          .then(() => {
            res.redirect("/me/stored/courses"); //redirect after success
          })
          .catch(next);
        break;
      default:
        res.send("action invaled");
    }
  }

  // [POST] /me/recycle/multiDelete
  recycleMultiDelete(req, res, next) {
    const action = req.body.action;
    const idsToDelete = req.body.courseIds;
    switch (action) {
      case "permanent-delete":
        Course.remove({ _id: { $in: idsToDelete } })
          .then(() => {
            res.redirect("/me/recycle/courses"); //redirect after success
          })
          .catch(next);
        break;
      default:
        res.send("action invaled");
    }
  }
}

module.exports = new meController();
