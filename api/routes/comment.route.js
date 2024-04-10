const express = require('express');
const {verifyUser}  = require('../utils/verifyUser.js')
const {createComment, getPostComments, likeComment, editComment, deleteComment} = require('../controllers/comment.controller.js')

const router = express.Router();

router.post('/create', verifyUser, createComment);
router.get('/getPostComments/:postId', getPostComments)
router.put('/likeComment/:commentId', verifyUser, likeComment)
router.put('/editComment/:commentId', verifyUser, editComment)
router.delete('/deleteComment/:commentId', verifyUser, deleteComment)

module.exports = router;