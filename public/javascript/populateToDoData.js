async function populateToDoData() {
  try {
    const res = await getToDos();
    console.log(res);

    if (!res.ok) {
      const contentDiv = document.getElementById('contentDiv');

      return (contentDiv.innerHTML = await loadErrorPageHTML(res));
    }

    const mainToDoDiv = document.getElementById('toDos');

    for (let index = 0; index < toDos.length; index++) {
      const toDo = toDos[index];

      const toDoDiv = generateToDoDiv(toDo);
      mainToDoDiv.appendChild(toDoDiv);
    }
  } catch (err) {
    console.log('there was an error:\n', err);
  }
}

async function loadErrorPageHTML(res) {
  const body = await res.json();
  console.log(body);
  let html = await (await fetch('../error.html')).text();

  html = html.replace('%STATUS_CODE%', res.status);
  html = html.replace('%ERROR%', body.error);
  html = html.replace('%MESSAGE%', body.message);

  return html;
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
  toDoDiv.addEventListener('click', function () {
    event.stopPropagation();
    completeToDo(this);
  });

  const description = document.createElement('div');
  const descriptionText = document.createTextNode(toDo.description);
  description.appendChild(descriptionText);

  const dueDate = document.createElement('div');

  let date = new Date(toDo.dueDate);
  date = date.toUTCString();

  // only show the dueDate field if there is one
  if (toDo.dueDate) {
    const dueDateText = document.createTextNode('Due By: ' + date);
    dueDate.appendChild(dueDateText);
  }

  const linkContainer = document.createElement('div');

  const editLink = document.createElement('span');
  editLink.appendChild(document.createTextNode(' Edit '));
  editLink.setAttribute('class', 'editTaskLink');
  editLink.addEventListener('click', (event) => {
    location.href = `http://localhost:3000/editToDo.html?id=${toDo._id}`;
  });

  const deleteLink = document.createElement('span');
  deleteLink.appendChild(document.createTextNode(' Delete '));
  deleteLink.setAttribute('class', 'deleteTaskLink');
  deleteLink.addEventListener('click', (event) => {
    event.stopPropagation();
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteToDo(toDo._id);
      window.alert('todo deleted');
      location.reload();
    } else {
      return;
    }
  });

  linkContainer.appendChild(editLink);
  linkContainer.appendChild(deleteLink);

  toDoDiv.appendChild(description);
  toDoDiv.appendChild(dueDate);
  toDoDiv.appendChild(linkContainer);

  return toDoDiv;
}

populateToDoData(); // immedietly start populating the data on page load
