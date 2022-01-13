const express = require('express');
const toDoController = require('../controllers/toDoController');

const router = express.Router();

router.route('/').post(toDoController.createToDo).get(toDoController.getToDos);

router
  .route('/:id')
  .get(toDoController.getToDo)
  .patch(toDoController.updateToDo)
  .delete(toDoController.deleteToDo);

module.exports = router;
