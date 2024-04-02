const express = require('express');
const router = express.Router();
const {verifyUser} = require('../utils/verifyUser.js')
const {create} = require('../controllers/post.controller.js')

router.post('/create', verifyUser, create);

module.exports = router;