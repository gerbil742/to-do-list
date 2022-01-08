//const { response } = require('express');

const elements = document.getElementById('toDos').children;
console.log(elements);

const changeToDoClass = function (completed) {
  if (completed == 'false') return 'toDo';
  else return 'toDoCompleted';
};

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  const id = element.attributes.id.value;
  const completed = element.attributes.completed.value;

  fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      complete: completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  element.className = changeToDoClass(completed);
}

// if element is completed, tehn change it to imcompleted
// if element is
