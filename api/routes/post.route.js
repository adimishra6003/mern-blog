const express = require('express');
const router = express.Router();
const {verifyUser} = require('../utils/verifyUser.js')
const {create, getposts, deletepost, updatepost} = require('../controllers/post.controller.js')

router.post('/create', verifyUser, create);
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', verifyUser, deletepost);
router.put('/updatepost/:postId/:userId', verifyUser, updatepost);

module.exports = router;