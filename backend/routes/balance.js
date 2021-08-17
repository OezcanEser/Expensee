const express = require('express');
const router = express.Router();
const { getUserInputs, getSummary } = require('../controller/balance');
const { protect } = require('../middleware/protect');

router.route('/').get(getUserInputs);
router.route('/summary').get(getSummary);

module.exports = router;
