//const { response } = require('express');

const elements = document.getElementsByClassName('todo');
console.log(elements);

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  const id = element.attributes.id.value;
  console.log(element.attributes);
  element.onclick = function () {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
}
