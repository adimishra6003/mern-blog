const express = require('express');
const {test, updateUser, deleteUser, signout, getUsers, getUser} = require('../controllers/user.controller.js');
const {verifyUser} = require('../utils/verifyUser.js')

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyUser, updateUser);
router.delete('/delete/:userId', verifyUser, deleteUser);
router.post('/signout', signout)
router.get('/getusers', verifyUser, getUsers);
router.get('/:userId', getUser);

module.exports = router;