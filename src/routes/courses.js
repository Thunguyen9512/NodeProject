/* courses router */

const express = require('express')
const router = express.Router();

const courseController = require('../app/controllers/CourseController');    //object extend form NewsController class


router.post('/store', courseController.store)

router.get('/create', courseController.create)
router.get('/', courseController.index)
router.get('/:slug', courseController.show)         //'/:slug' --> courseController.show() will receive an argument: slug   ; /:Id --> srgument: Id
module.exports = router