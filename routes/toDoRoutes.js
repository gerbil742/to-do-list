const express = require('express');
const toDoController = require('../controllers/toDoController');

const router = express.Router();

router
  .route('/:id')
  .get(toDoController.markComplete)
  .patch(toDoController.updateToDo);

module.exports = router;
