const db = require('../db/connection');
const ErrorHandler = require('../utils/error');
const asyncHandler = require('../utils/asyncHandler');

const redirect = asyncHandler(async (req, res, next) => {
  let { rows } = await db.query(
    'select * fom einnahmen where user_id=$1  union select * from ausgaben where user_id=$1',
    [req.user.id]
  );

  if (!rows) {
    return next(new ErrorHandler('Nothing to see here!', 404));
  }

  res.status(200).json({
    success: true,
    data: rows,
  });
});

module.exports = {
  redirect,
};
