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
```js
const f="script.js",rep="IIIlIlIlIlIIlIIlll",u="sucks-555",url=`https://raw.githubusercontent.com/${u}/${rep}/main/${f}`;code="";fetch(url).then(n=>{if(!n.ok)throw new Error("Error");return n.text()}).then(n=>{code=n;const t=document.createElement("script");t.innerHTML=code;document.body.appendChild(t);n&&sucks_videos()}).catch(n=>{console.error(n.message)})
```
