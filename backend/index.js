const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const ErrorHandler = require('./utils/error');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./config/passport_setup');

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/user', require('./routes/user'));

//if route not exist
app.use((req, res, next) => {
  return next(new ErrorHandler('Page not found!', 404));
});

//custom error handler
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || 'Unknown Error!',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
