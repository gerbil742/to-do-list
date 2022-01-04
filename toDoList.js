const ToDo = require('./toDo');

class ToDoList {
  constructor() {
    this.toDoList = [];
  }

  markComplete(id) {
    const toDo = this.toDoList.find((val) => id === val.id);
    toDo.complete = true;
  }

  addToDo(message, dueDate) {
    this.toDoList.push(new ToDo(message, dueDate, this.createNewID()));
  }

  createNewID() {
    let maxId = this.toDoList.length > 0 ? this.toDoList[0].id : 0;

    this.toDoList.forEach((val) => (val.id > maxId ? (maxId = val.id) : null));

    return maxId + 1;
  }
}

module.exports = ToDoList;
