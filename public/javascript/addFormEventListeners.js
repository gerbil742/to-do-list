function createFormDataEvent(formID) {
  event.preventDefault();
  new FormData(document.getElementById(formID)); // fires the formdata event
}

async function submitData(method) {
  try {
    let formData = event.formData;
    //console.log(method);
    let postData = {};

    for (var key of formData.keys()) {
      postData[key] = formData.get(key);
    }

    //console.log(postData);
    if (method === 'POST') {
      await createToDo(postData);
    }
    if (method === 'PATCH') {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      await updateToDo(id, postData);
    }
    alert('Success!');
  } catch (err) {
    alert('There was an error. Try again later.');
  }
}

async function addFormEventListeners(formID, method) {
  document.getElementById(formID).addEventListener('submit', function () {
    createFormDataEvent(formID);
  });
  document.getElementById(formID).addEventListener('formdata', function () {
    submitData(method);
  });
}
