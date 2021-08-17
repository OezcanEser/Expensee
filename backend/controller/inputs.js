const db = require('../db/connection');
const ErrorHandler = require('../utils/error');
const asyncHandler = require('../utils/asyncHandler');
const { checkInput } = require('../middleware/checkData');

const createInput = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  let userId = 1;
  let checkInputData = checkInput(req.body);

  if (!checkInputData) {
    return next(new ErrorHandler('Please provide all required data!', 400));
  }

  let dataToSave = {
    ...req.body,
  };

  if (
    dataToSave.category === 'Ausgaben' ||
    dataToSave.category === 'Sonstiges'
  ) {
    dataToSave.price = dataToSave.price * -1;
  } else {
    dataToSave.price = dataToSave.price * 1;
  }

  let { category, price, description, created_at } = dataToSave;

  let { rows } = await db.query(
    'insert into wallets (category, description, price, created_at,user_id) values ($1, $2, $3, $4, $5) returning *',
    [category, description, price, created_at, userId]
  );

  res.status(201).json({
    success: true,
    data: rows[0],
  });
});

const deleteInput = asyncHandler(async (req, res, next) => {
  let userId = 1;
  let idToDelete = req.body.id;

  if (!idToDelete) {
    return next(new ErrorHandler('Please provide a valid id!', 403));
  }

  let { rows } = await db.query(
    'delete from wallets where user_id= $1 and id=$2',
    [userId, idToDelete]
  );

  res.status(200).json({
    success: true,
  });
});

module.exports = {
  createInput,
  deleteInput,
};
