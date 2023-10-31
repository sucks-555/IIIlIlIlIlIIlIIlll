# IIIlIlIlIlIIlIIlll

```js
const scriptUrl = "https://raw.githubusercontent.com/sucks-555/IIIlIlIlIlIIlIIlll/main/script.js";
let scriptCode = "";
fetch(scriptUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.text();
  })
  .then(data => {
    scriptCode = data;
    const scriptElement = document.createElement("script");
    scriptElement.innerHTML = scriptCode;
    document.body.appendChild(scriptElement);
    if (data) {
      sucks_videos();
    }
  })
  .catch(error => {
    console.error(error.message);
  });

```
