var express = require('express');
var controller = require('../controller/user.controller.js')

var router = express.Router();
router.get('/',controller.index);
router.get('/search',controller.search);
router.get('/create',controller.create);
router.post('/create',controller.postCreate);
router.get('/:userId',controller.view);


module.exports = router;