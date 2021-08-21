const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/protect');
const { register, login, logout, getMe } = require('../controller/userJwt');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(protect, logout);
router.route('/me').get(getMe);

module.exports = router;
