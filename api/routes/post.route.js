const express = require('express');
const router = express.Router();
const {verifyUser} = require('../utils/verifyUser.js')
const {create, getposts} = require('../controllers/post.controller.js')

router.post('/create', verifyUser, create);
router.get('/getposts', getposts)

module.exports = router;