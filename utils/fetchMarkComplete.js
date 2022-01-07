//const { response } = require('express');

const elements = document.getElementsByClassName('todo');
console.log(elements);

const changeToDoClass = function (completed) {
  if (!completed) return 'toDo';
  else return 'completedToDo';
};

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  const id = element.attributes.id.value;
  const completed = element.attributes.completed.value;

  console.log('element.attribute ' + completed);

  fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PATCH',
    body: {
      completed: completed,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  element.className = changeToDoClass(completed);
}

// if element is completed, tehn change it to imcompleted
// if element is
