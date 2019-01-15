var express = require('express')
var router = express.Router()

var LikesController = require('../../controllers/likes.controller');

router.get('/', LikesController.getLikes)
router.post('/', LikesController.addLikes)
router.put('/', LikesController.addLikes)

module.exports = router;
