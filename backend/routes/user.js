const express = require('express');
const passport = require('passport');
const router = express.Router();

router.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router
  .route('/google/redirect')
  .get(passport.authenticate('google'), (req, res) => {
    console.log('Login success', req.user);
  });

router.route('/logout').get((req, res) => {
  res.send('logout with passport');
  req.logout();
});

module.exports = router;
