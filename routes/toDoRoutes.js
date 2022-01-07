const express = require('express');
const toDoController = require('../controllers/toDoController');

const router = express.Router();

router.route('/:id').get(toDoController.markComplete);

module.exports = router;
