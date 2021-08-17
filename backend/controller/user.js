const db = require('../db/connection');
const ErrorHandler = require('../utils/error');
const asyncHandler = require('../utils/asyncHandler');

const redirect = asyncHandler(async (req, res, next) => {
  let userId = 1;
  let offsetIndex = 3;
  let endOfLength = false;
  let rowsCount;

  let inputLength = await db.query(
    'select count(*) from wallets where user_id=$1',
    [userId]
  );

  rowsCount = inputLength.rows[0].count * 1;

  if (offsetIndex + 7 > rowsCount) {
    endOfLength = true;
    offsetIndex = rowsCount - 7;
  }

  let { rows } = await db.query(
    'select * from wallets where user_id=$1 offset $2 limit 7',
    [userId, offsetIndex]
  );

  if (!rows) {
    return next(new ErrorHandler('Nothing to see here!', 404));
  }

  res.status(200).json({
    success: true,
    endOfLength,
    data: rows,
  });
});

module.exports = {
  redirect,
};
