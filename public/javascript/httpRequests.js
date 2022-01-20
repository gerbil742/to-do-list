async function updateToDo(id, data) {
  try {
    console.log(id);
    console.log(data);
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
  let res;
  try {
    res = await fetch(`http://localhost:3000/todos/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    // const body = await res.json();
    // console.log(body);

    //return body;

    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }

  // if (res.ok) {
  //   return body.toDos; // implicity returns a promise. Use await on the consuemer function
  // } else {
  //   const errorMessage = `${res.status}\n${body.errorName}\n${body.errorMessage}`;
  //   throw new Error(errorMessage);
  // }
}

async function getToDo(id) {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();
    console.log(data);
    return data.toDo;
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
