async function loadErrorPageHTML(error, elementID) {
  console.log(error);
  console.log(error.message);

  let html = await (await fetch('../error.html')).text();

  html = html.replace('%ERROR%', error.name);
  html = html.replace('%MESSAGE%', error.message);

  document.getElementById(elementID).innerHTML = html;
}
