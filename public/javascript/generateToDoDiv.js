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
  try {
    // First, create overall toDo div container to hold all the the elements
    const toDoDiv = document.createElement('div');

    toDoDiv.setAttribute('complete', toDo.complete ? 'true' : 'false');
    toDoDiv.setAttribute('id', toDo._id);
    toDoDiv.setAttribute('class', toDo.complete ? 'toDoComplete' : 'toDo');
    toDoDiv.addEventListener('click', async function () {
      event.stopPropagation();
      await completeToDo(this);
    });

    // Create a text div to display the toDo description
    const description = document.createElement('div');
    const descriptionText = document.createTextNode(toDo.description);
    description.appendChild(descriptionText);

    // Create div to display the DueBy field
    const dueDate = document.createElement('div');
    let date = new Date(toDo.dueDate);
    date = date.toUTCString();
    // only show the dueDate field if there is one
    if (toDo.dueDate) {
      const dueDateText = document.createTextNode('Due By: ' + date);
      dueDate.appendChild(dueDateText);
    }

    // create container div to hold the edit and delete links
    const linkContainer = document.createElement('div');

    // create the edit link div
    const editLink = document.createElement('span');
    editLink.appendChild(document.createTextNode(' Edit '));
    editLink.setAttribute('class', 'editTaskLink');
    editLink.addEventListener('click', (event) => {
      location.href = `http://localhost:3000/editToDo.html?id=${toDo._id}`;
    });

    // create the delete link div
    const deleteLink = document.createElement('span');
    deleteLink.appendChild(document.createTextNode(' Delete '));
    deleteLink.setAttribute('class', 'deleteTaskLink');
    deleteLink.addEventListener('click', async (event) => {
      event.stopPropagation();
      if (window.confirm('Are you sure you want to delete this todo?')) {
        await deleteToDo(toDo._id);
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
  } catch (err) {
    throw err;
  }
}
