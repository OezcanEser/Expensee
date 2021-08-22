const express = require('express');
const router = express.Router();
const { getUserInputs, getSummary, showAll } = require('../controller/balance');
const { protect } = require('../middleware/protect');

router.route('/').get(protect, getUserInputs);
router.route('/all').get(protect, showAll);

router.route('/summary').get(protect, getSummary);

module.exports = router;
