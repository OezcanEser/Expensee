const express = require('express');
const router = express.Router();
const { createInput, deleteInput } = require('../controller/inputs');
const { protect } = require('../middleware/protect');

router.route('/').post(createInput).delete(deleteInput);

module.exports = router;
