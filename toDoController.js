const ToDo = require('./toDoModel');
const mongoose = require('mongoose');

exports.markComplete = async (_id) => {
  try {
    const query = ToDo.findByIdAndUpdate(_id, { complete: true });
    await query;
    console.log('toDo marked completed');
  } catch (err) {
    console.log('there was an error: ', err);
  }
};

exports.addToDo = async (message, dueDate) => {
  try {
    const query = ToDo.create({ message, dueDate });
    await query;
    console.log('New ToDo added');
  } catch (err) {
    console.log('There was an error: ', err);
  }
};
