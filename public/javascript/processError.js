async function loadErrorPageHTML(res) {
  const body = await res.json();
  console.log(body);
  let html = await (await fetch('../error.html')).text();

  html = html.replace('%STATUS_CODE%', res.status);
  html = html.replace('%ERROR%', body.error);
  html = html.replace('%MESSAGE%', body.message);

  return html;
}
