class ToDo {
  constructor(message, dueDate = null) {
    this.message = message;
    this.dueDate = dueDate;
    this.complete = false;
    this.id = undefined;
  }
}

module.exports = ToDo;
