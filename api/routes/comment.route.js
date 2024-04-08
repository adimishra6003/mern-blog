const express = require('express');
const {verifyUser}  = require('../utils/verifyUser.js')
const {createComment} = require('../controllers/comment.controller.js')

const router = express.Router();

router.post('/create', verifyUser, createComment);

module.exports = router;