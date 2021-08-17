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
