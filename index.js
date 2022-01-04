const ToDoList = require('./toDoList');
//const ToDo = require('./toDo');

const list = new ToDoList();

list.addToDo('do disths', Date.now());
list.addToDo('do disths', Date.now());

list.markComplete(1);

console.log(list);
