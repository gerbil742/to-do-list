class ToDo {
  constructor(message, dueDate = null, id) {
    this.message = message;
    this.dueDate = dueDate;
    this.complete = false;
    this.id = id;
  }
}

module.exports = ToDo;
