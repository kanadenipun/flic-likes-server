var express = require('express')

var router = express.Router()
var likes = require('./api/likes.route')
router.use('/likes', likes);


module.exports = router;
