async function preloadFormData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const currentToDo = await getToDo(id);

    const descriptionInput = document.getElementById('description');
    descriptionInput.setAttribute('value', currentToDo.description);
    if (currentToDo.dueDate) {
      let date = new Date(currentToDo.dueDate);

      const year = date.getUTCFullYear();
      const day = date.getUTCDate();
      const month = date.getUTCMonth();

      // Needed to pad 0's in fornt of values to get date in the right format for the html Date tag
      const dateString = `${year}-${(month + 1)
        .toString()
        .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      const dueDateInput = document.getElementById('dueDate');
      dueDateInput.setAttribute('value', dateString);
    }
  } catch (err) {
    await loadErrorPageHTML(err);
  }
}
