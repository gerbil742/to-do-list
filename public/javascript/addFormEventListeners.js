function createFormDataEvent(formID) {
  event.preventDefault();
  new FormData(document.getElementById(formID)); // fires the formdata event
}

async function addFormEventListeners(formID, method) {
  try {
    document.getElementById(formID).addEventListener('submit', function () {
      createFormDataEvent(formID);
    });
    document.getElementById(formID).addEventListener('formdata', function () {
      submitFormData(method);
    });
  } catch (err) {
    await loadErrorPageHTML(err);
  }
}
