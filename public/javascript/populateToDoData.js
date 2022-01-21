async function populateToDoData() {
  try {
    const toDos = await getToDos();

    const mainToDoDiv = document.getElementById('toDos');
    for (let index = 0; index < toDos.length; index++) {
      const toDo = toDos[index];

      const toDoDiv = generateToDoDiv(toDo);
      mainToDoDiv.appendChild(toDoDiv);
    }
  } catch (err) {
    await loadErrorPageHTML(err);
  }
}

populateToDoData(); // immedietly start populating the data on page load
