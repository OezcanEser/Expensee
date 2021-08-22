const db = require('../db/connection');
const asyncHandler = require('../utils/asyncHandler');
const ErrorHandler = require('../utils/error');
const { calculateBalance } = require('../utils/calculateBalance');

const getUserInputs = asyncHandler(async (req, res, next) => {
  let userId = req.user.id;
  let offsetIndex = req.query.offset * 1;
  let endOfLength = false;
  let rowsCount;

  let inputLength = await db.query(
    'select count(*) from wallets where user_id=$1',
    [userId]
  );

  rowsCount = inputLength.rows[0].count * 1;

  if (rowsCount <= 7) {
    offsetIndex = 0;
    endOfLength = true;
  } else {
    if (offsetIndex + 7 > rowsCount) {
      offsetIndex = rowsCount - 7;
      endOfLength = true;
    }
  }

  let { rows } = await db.query(
    'select * from wallets where user_id=$1 offset $2 limit 7',
    [userId, offsetIndex]
  );

  if (!rows) {
    return next(new ErrorHandler('Nothing to see here!', 404));
  }

  res.status(200).json({
    user: {
      username: req.user.username,
      email: req.user.email,
    },
    success: true,
    endOfLength,
    data: rows,
  });
});

const showAll = asyncHandler(async (req, res, next) => {
  let userId = req.user.id;
  let { rows } = await db.query('select * from wallets where user_id= $1', [
    userId,
  ]);

  if (!rows.length) {
    return next(new ErrorHandler('Data not found!', 404));
  }

  res.status(200).json({
    success: true,
    data: rows,
  });
});

const getSummary = asyncHandler(async (req, res, next) => {
  // select distinct category, sum(price) as price from wallets where user_id=1 group by category;
  let userId = req.user.id;

  let { rows } = await db.query('select * from wallets where user_id = $1', [
    userId,
  ]);

  let obj = { einkommen: 0, ausgaben: 0, sparen: 0, sonstiges: 0 };

  if (!rows.length) {
    return next(new ErrorHandler('There is nothing to show!', 404));
  }

  if (rows.length !== 0) {
    obj.einkommen = calculateBalance('Einnahmen', rows);
    obj.ausgaben = calculateBalance('Ausgaben', rows);
    obj.sonstiges = calculateBalance('Sonstiges', rows);

    obj.sparen =
      obj.einkommen.costenSummary +
      obj.ausgaben.costenSummary +
      obj.sonstiges.costenSummary;
  }

  res.status(200).json({
    data: obj,
  });
});

module.exports = {
  getUserInputs,
  getSummary,
  showAll,
};
