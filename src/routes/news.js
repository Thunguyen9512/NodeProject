/* news router */
const express = require('express')
const router = express.Router();

const newsController = require('../app/controllers/NewsController');    //object extend form NewsController class

router.get('/:slug',newsController.show)    //'/:slug' --> courseController.show() will receive an argument: slug   ; /:Id --> srgument: Id
router.get('/', newsController.index)

module.exports = router