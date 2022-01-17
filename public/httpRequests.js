async function updateToDo(id, data) {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(await res.json());
  } catch (err) {
    console.log('there was an error: ', err);
  }
}

async function getToDos() {
  try {
    const res = await fetch(`http://localhost:3000/todos/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();
    console.log(data);
    return data.toDos; // implicity returns a promise. Use await on the consuemer function
  } catch (err) {
    console.log('there was an error: ', err);
  }
}

async function createToDo(data) {
  try {
    const res = await fetch(`http://localhost:3000/todos/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(await res.json());
  } catch (err) {
    console.log('there was an error: ', err);
  }
}

async function deleteToDo(id) {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log('deleteing ToDo: ' + id);
  } catch (err) {
    console.log('there was an error: ', err);
  }
}
