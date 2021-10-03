/* site router */
const express = require('express')
const router = express.Router();

const siteController = require('../app/controllers/SiteController');    //object extend form NewsController class

router.get('/search', siteController.search)
router.get('/',siteController.home)

module.exports = router