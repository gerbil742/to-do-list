async function populateToDoData() {
  const toDos = await getToDos();
  //console.log(toDos);

  const mainToDoDiv = document.getElementById('toDos');

  for (let index = 0; index < toDos.length; index++) {
    const toDo = toDos[index];

    const toDoDiv = generateToDoDiv(toDo);
    mainToDoDiv.appendChild(toDoDiv);
  }
}

/*
Create the html to neatly display a toDo from the database. Will look like this 
<div class="toDo" id = "61d5e24acf15439643fcf7f8" complete=false onclick="completeToDo(id)">
  <div>%DESCRIPTION%</div>
  <div>Due by: %DUEDATE%</div>
  <div>
    <span class="editTaskLink">Edit</span>
    <span class="deleteTaskLink">Delete</span>
  </div>
</div> */
function generateToDoDiv(toDo) {
  const toDoDiv = document.createElement('div');

  toDoDiv.setAttribute('complete', toDo.complete ? 'true' : 'false');
  toDoDiv.setAttribute('id', toDo._id);
  toDoDiv.setAttribute('class', toDo.complete ? 'toDoComplete' : 'toDo');

  const description = document.createElement('div');
  const descriptionText = document.createTextNode(toDo.description);
  description.appendChild(descriptionText);

  const dueDate = document.createElement('div');

  let date = new Date(toDo.dueDate);
  date = date.toLocaleDateString('en-US');

  const dueDateText = document.createTextNode('Due By: ' + date);
  dueDate.appendChild(dueDateText);

  const linkContainer = document.createElement('div');

  const editLink = document.createElement('span');
  editLink.appendChild(document.createTextNode(' Edit '));
  editLink.setAttribute('class', 'editTaskLink');

  const deleteLink = document.createElement('span');
  deleteLink.appendChild(document.createTextNode(' Delete '));
  deleteLink.setAttribute('class', 'deleteTaskLink');

  linkContainer.appendChild(editLink);
  linkContainer.appendChild(deleteLink);

  toDoDiv.appendChild(description);
  toDoDiv.appendChild(dueDate);
  toDoDiv.appendChild(linkContainer);

  return toDoDiv;
}

populateToDoData(); // immedietly start populating the data on page load
