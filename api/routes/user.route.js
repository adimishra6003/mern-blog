const express = require('express');
const {test, updateUser} = require('../controllers/user.controller.js');
const {verifyUser} = require('../utils/verifyUser.js')

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyUser, updateUser);

module.exports = router;