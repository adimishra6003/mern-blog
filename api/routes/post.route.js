const express = require('express');
const router = express.Router();
const {verifyUser} = require('../utils/verifyUser.js')
const {create, getposts, deletepost} = require('../controllers/post.controller.js')

router.post('/create', verifyUser, create);
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', verifyUser, deletepost);

module.exports = router;