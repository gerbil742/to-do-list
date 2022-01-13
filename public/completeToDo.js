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
function completeToDo(toDo) {
  const complete = toDo.getAttribute('complete');
  console.log(toDo);

  if (complete === 'false') {
    toDo.setAttribute('complete', true);
    toDo.className = 'toDoComplete';
  } else if (complete === 'true') {
    toDo.setAttribute('complete', false);
    toDo.className = 'toDo';
  }

  const updateData = {
    complete: toDo.getAttribute('complete'),
  };

  // send POST request with the updated "complete" data
  updateToDo(toDo.id, updateData);
}
