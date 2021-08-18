const db = require('../db/connection');
const ErrorHandler = require('../utils/error');
const asyncHandler = require('../utils/asyncHandler');

const redirect = asyncHandler(async (req, res, next) => {
  res.status(200).redirect(process.env.REDIRECT_URL).json({
    success: true,
    message: 'User is Logged in',
  });
});

const logoutUser = asyncHandler(async (req, res, next) => {
  req.logout();
  res.sgatus(200).json({
    success: true,
    user: null,
  });
});

module.exports = {
  redirect,
  logoutUser,
};
