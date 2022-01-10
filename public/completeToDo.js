// const elements = document.getElementById('toDos').children;
// console.log(elements);

// Changing the toDo css class on click. if the the current toDo is NOT completed, on click we need to change its class to Completed (toDoCompleted). if the toDo is already Completed
// we need to change teh class back to NOT completed (toDo) on click

const getElementById = function (id) {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const elementId = element.attributes.id.value;

    if (elementId === id) return element;
  }
};

function completeToDo(id) {
  const element = getElementById(id);

  const completed = element.attributes.completed.value;

  if (completed === 'false') {
    element.attributes.completed.value = true;
    element.className = 'toDoCompleted';
  } else {
    element.attributes.completed.value = false;
    element.className = 'toDo';
  }
}
// if (completed == 'false') return 'toDo';
// else return 'toDoCompleted';
