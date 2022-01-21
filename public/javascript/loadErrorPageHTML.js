async function loadErrorPageHTML(error) {
  try {
    console.log(error);
    console.log(error.message);

    let html = await (await fetch('../error.html')).text();

    html = html.replace('%ERROR%', error.name);
    html = html.replace('%MESSAGE%', error.message);
    html = html.replace('%STACK%', error.stack);

    document.getElementById('content').innerHTML = html;
  } catch (err) {
    document.getElementById(
      'content'
    ).innerHTML = `Error Loading Error Page <br>${error.name}<br>${error.message}<br>${error.stack}`;
  }
}
