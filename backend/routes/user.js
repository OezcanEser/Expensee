const express = require('express');
const passport = require('passport');
const router = express.Router();
const { redirect } = require('../controller/user');

router.route('/test').get(redirect);

router.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router
  .route('/auth/google/redirect')
  .get(passport.authenticate('google'), redirect);

// (req, res) => {
//   console.log('Login success', req.user);
// }

router.route('/logout').get((req, res) => {
  res.send('logout with passport');
  req.logout();
});

module.exports = router;
