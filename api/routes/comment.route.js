const express = require('express');
const {verifyUser}  = require('../utils/verifyUser.js')
const {createComment, getPostComments, likeComment, editComment} = require('../controllers/comment.controller.js')

const router = express.Router();

router.post('/create', verifyUser, createComment);
router.get('/getPostComments/:postId', getPostComments)
router.put('/likeComment/:commentId', verifyUser, likeComment)
router.put('/editComment/:commentId', verifyUser, editComment)

module.exports = router;