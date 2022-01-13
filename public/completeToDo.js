// const elements = document.getElementById('toDos').children;
// console.log(elements);

// const getElementById = function (id) {
//   for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     const elementId = element.attributes.id.value;

//     if (elementId === id) return element;
//   }
// };

// Changing the toDo css class on click. if the the current toDo is NOT completed, on click we need to change its class to Completed (toDoCompleted). if the toDo is already Completed
// we need to change teh class back to NOT completed (toDo) on click
function completeToDo(id) {
  const element = getElementById(id);

  const complete = element.attributes.complete.value;

  if (complete === 'false') {
    element.attributes.complete.value = true;
    element.className = 'toDoComplete';
  } else {
    element.attributes.complete.value = false;
    element.className = 'toDo';
  }

  const updateData = {
    complete: element.attributes.complete.value,
  };

  // send POST request with the updated "complete" data
  updateToDo(id, updateData);
}
