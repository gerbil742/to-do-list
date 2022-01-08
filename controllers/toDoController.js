const ToDo = require('../models/toDoModel');
const mongoose = require('mongoose');

exports.getToDo = async (req, res) => {
  try {
    const id = req.params.id;

    const toDo = await ToDo.findById(id);

    res.status(200).json({
      status: 'success',
      toDo,
    });
  } catch (err) {
    console.log('there was an error: ', err);
  }
};

exports.createToDo = async (req, res) => {
  const { message, dueDate } = req.body;

  try {
    const newToDo = await ToDo.create({ message, dueDate });

    res.status(200).json({
      status: 'success',
      message: 'Created new toDo',
      data: newToDo,
    });
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
    const updatedToDo = await query;

    console.log('toDo updated');
    res.status(200).json({
      status: 'success',
      message: 'Updated the toDo',
      data: updatedToDo,
    });
  } catch (err) {
    console.log('there was an error: ', err);
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    const id = req.params.id;

    await ToDo.findOneAndDelete({ _id: id });

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    console.log('there was an error: ', err);
  }
};
