const ToDo = require('../models/toDoModel');
const mongoose = require('mongoose');

exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDo.find();

    res.status(200).json({
      status: 'success',
      toDos,
    });
  } catch (err) {
    console.log('there was an error: ', err);
  }
};

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
  const { description, dueDate } = req.body;

  try {
    const newToDo = await ToDo.create({ description, dueDate });

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
    const { description, dueDate, complete } = req.body;

    const query = ToDo.findByIdAndUpdate(
      id,
      { description, dueDate, complete },
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
