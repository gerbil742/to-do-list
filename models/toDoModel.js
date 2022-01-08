const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'A to do must include a description'],
    maxlength: 100,
    trim: true,
  },
  dueDate: Date,
  complete: { type: Boolean, default: false },
});

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
