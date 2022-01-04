const ToDoList = require('./toDoList');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const ToDo = require('./toDo');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('Database connection successful');
});

const list = new ToDoList();

list.addToDo('do disths', Date.now());
list.addToDo('do disths', Date.now());

list.markComplete(1);

console.log(list);
