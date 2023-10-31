# IIIlIlIlIlIIlIIlll

```js

const scriptUrl = "https://raw.githubusercontent.com/sucks-555/IIIlIlIlIlIIlIIlll/main/script.js";
let scriptCode = "";
fetch(scriptUrl)
  .then(response => response.text())
  .then(data => {
    scriptCode = data;
    const scriptElement = document.createElement("script");
    scriptElement.innerHTML = scriptCode;
    document.body.appendChild(scriptElement);
  })
  .catch(error => {
    console.error("スクリプトのダウンロードに失敗しました", error);
  });
```
