/* me.js */

const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/meController"); //object extend form meController class

router.get("/stored/courses", meController.storedCourses); //  show list of courses
router.post("/stored/multiDelete", meController.storedMultiDetele)
router.get("/stored/posts", meController.storedPosts); //  undefined
router.get("/stored/:id/edit", meController.storedEdit); //  edit course
router.post("/stored/:id/delete", meController.softDetelte); // temp link to delete course
router.post("/recycle/:id/restore", meController.restore);  // temp link to restore
router.post("/recycle/multiDelete", meController.recycleMultiDelete)
router.post("/recycle/:id/pernamentDelete", meController.permanentDetelte); //temp link to permanent delete
router.post("/courses/:id", meController.storedUpdate); //
router.get("/", meController.index); // undefine
router.get("/recycle/courses", meController.recycle); // show list of recycle course
module.exports = router;
