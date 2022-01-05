const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'A to do must include a description'],
  },
  dueDate: String,
  complete: { type: Boolean, default: false },
});

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
