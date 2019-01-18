var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'likes.html'))
});

module.exports = router;
