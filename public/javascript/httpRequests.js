async function updateToDo(id, data) {
  try {
    const res = await fetch(`http://localhost:3000/tdos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!res.ok) {
      let error = new Error(`${res.statusText} ${res.url}`);
      error.name = res.status;
      throw error;
    }

    console.log(await res.json());
  } catch (err) {
    throw err;
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

    if (!res.ok) {
      let error = new Error(`${res.statusText} ${res.url}`);
      error.name = res.status;
      throw error;
    }

    const body = await res.json();
    console.log(body);

    return body.toDos;
  } catch (err) {
    throw err;
  }
}

async function getToDo(id) {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!res.ok) {
      let error = new Error(`${res.statusText} ${res.url}`);
      error.name = res.status;
      throw error;
    }

    const body = await res.json();
    console.log(body);

    return body.toDo;
  } catch (err) {
    throw err;
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

    if (!res.ok) {
      let error = new Error(`${res.statusText} ${res.url}`);
      error.name = res.status;
      throw error;
    }

    const body = await res.json();
    console.log(body);
  } catch (err) {
    throw err;
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

    if (!res.ok) {
      let error = new Error(`${res.statusText} ${res.url}`);
      error.name = res.status;
      throw error;
    }

    const body = await res.json();
    console.log(body);
  } catch (err) {
    throw err;
  }
}
