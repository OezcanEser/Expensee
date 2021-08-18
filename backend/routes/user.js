const express = require('express');
const passport = require('passport');
const router = express.Router();
const { redirect, logoutUser } = require('../controller/user');

router.route('/test').get(redirect);

router.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router
  .route('/auth/google/redirect')
  .get(passport.authenticate('google'), redirect);

router.route('/logout').get(logoutUser);

module.exports = router;

// user route:
// login get http://127.0.0.1:5000/user/auth/google > response {  success: true, message: 'User is Logged in',}
// logout get http://127.0.0.1:5000/user/logout > response {  success: true, user: null}
