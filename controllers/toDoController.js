const ToDo = require('../models/toDoModel');
const mongoose = require('mongoose');

exports.markComplete = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req);

    const query = ToDo.findByIdAndUpdate(id, { complete: true });
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

exports.updateToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const { message, dueDate, complete } = req.body;

    const query = ToDo.findByIdAndUpdate(
      id,
      { message, dueDate, complete },
      {
        new: true,
        runValidators: true,
      }
    );
    await query;
    console.log('toDo updated');
    res.status(200).json({
      status: 'success',
      message: 'Updated the toDo',
    });
  } catch (err) {
    console.log('there was an error: ', err);
  }
};
