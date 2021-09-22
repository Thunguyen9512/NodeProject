const express = require('express')
const router = express.Router();

const siteController = require('../app/controllers/SiteController');    //object extend form NewsController class

router.use('/search', siteController.search)
router.use('/',siteController.home)

module.exports = router