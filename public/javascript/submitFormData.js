async function submitFormData(method) {
  try {
    let formData = event.formData;
    let postData = {};

    for (var key of formData.keys()) {
      postData[key] = formData.get(key);
    }

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
    //alert('There was an error. Try again later.');
    await loadErrorPageHTML(err);
  }
}
