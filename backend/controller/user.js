const db = require('../db/connection');
const ErrorHandler = require('../utils/error');
const asyncHandler = require('../utils/asyncHandler');

const redirect = asyncHandler(async (req, res, next) => {
  res.status(200).redirect(process.env.REDIRECT_URL).json({
    success: true,
    message: 'User is Logged in',
  });
});

module.exports = {
  redirect,
};
