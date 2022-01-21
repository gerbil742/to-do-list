// Changing the toDo css class on click. if the the current toDo is NOT completed, on click we need to change its class to Completed (toDoCompleted). if the toDo is already Completed
// we need to change teh class back to NOT completed (toDo) on click
async function completeToDo(toDo) {
  try {
    const complete = toDo.getAttribute('complete');
    console.log(toDo);

    if (complete === 'false') {
      toDo.setAttribute('complete', true);
      toDo.className = 'toDoComplete';
    } else if (complete === 'true') {
      toDo.setAttribute('complete', false);
      toDo.className = 'toDo';
    }

    const updateData = {
      complete: toDo.getAttribute('complete'),
    };

    // send POST request with the updated "complete" data
    await updateToDo(toDo.id, updateData);
  } catch (err) {
    await loadErrorPageHTML(err);
  }
}
