const express = require('express');
const router = express.Router();
const { createInput, deleteInput } = require('../controller/inputs');
const { protect } = require('../middleware/protect');

router.route('/').post(protect, createInput);
router.route('/:id').delete(protect, deleteInput);

module.exports = router;

//input routes
// / post /input > response { success: true, data: rows[0] -> Object ,} data from frontend > category, price, description, created_at
// / delete /input >response {  success: true,}
