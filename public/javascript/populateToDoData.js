async function populateToDoData() {
  try {
    const res = await getToDos();
    const body = await res.json();
    console.log(res);

    const toDos = body.toDos;
    console.log(toDos);

    const mainToDoDiv = document.getElementById('toDos');
    for (let index = 0; index < toDos.length; index++) {
      const toDo = toDos[index];

      const toDoDiv = generateToDoDiv(toDo);
      mainToDoDiv.appendChild(toDoDiv);
    }
  } catch (err) {
    await loadErrorPageHTML(err, 'contentDiv');
  }
}

populateToDoData(); // immedietly start populating the data on page load
