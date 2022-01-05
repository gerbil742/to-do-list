const ToDoList = require('./toDoList');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ToDo = require('./toDoModel');
const toDoController = require('./toDoController');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('Database connection successful');
});

// const list = new ToDoList();

// list.addToDo('do disths', Date.now());
// list.addToDo('do disths', Date.now());

// list.toDoList[0].id = 1;
// list.markComplete(1);

// ToDo.create(list.toDoList);

// console.log(list);

toDoController.markComplete('61d5cf10fa83191f55faeebc');
toDoController.addToDo('make food', Date.now());
