const express = require('express');
const {test, updateUser, deleteUser} = require('../controllers/user.controller.js');
const {verifyUser} = require('../utils/verifyUser.js')

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyUser, updateUser);
router.delete('/delete/:userId', verifyUser, deleteUser);

module.exports = router;