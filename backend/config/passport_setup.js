const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../db/connection');
const ErrorHandler = require('../utils/error');

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query('select * from users where id=$1', [id]).then((user) =>
    done(null, user)
  );
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/user/google/redirect',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let existingUser = await db.query(
          'select * from users where googleId = $1',
          [profile.id]
        );
        if (existingUser.rows[0]) {
          done(null, existingUser.rows[0]);
        } else {
          let user = await db.query(
            'insert into users (username,googleId) values ($1, $2) returning *',
            [profile.displayName, profile.id]
          );
          done(null, user.rows[0]);
        }
      } catch (error) {
        console.log(error);
        return new ErrorHandler(error, 400);
      }
    }
  )
);
