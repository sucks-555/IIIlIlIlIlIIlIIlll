# IIIlIlIlIlIIlIIlll

*`Non lightweight version`*
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

*`Error Focused Version`*
```js
const f="script.js",rep="IIIlIlIlIlIIlIIlll",u="sucks-555",url=`https://raw.githubusercontent.com/${u}/${rep}/main/${f}`;code="";fetch(url).then(n=>{if(!n.ok)throw new Error("Error");return n.text()}).then(n=>{code=n;const t=document.createElement("script");t.innerHTML=code;document.body.appendChild(t);n&&sucks_videos()}).catch(n=>{console.error(n.message)})
```

*`Error ignoring version`*
```js
const f="script.js",rep="IIIlIlIlIlIIlIIlll",u="sucks-555",url=`https://raw.githubusercontent.com/${u}/${rep}/main/${f}`;let code="";fetch(url).then(n=>n.text()).then(n=>{code=n;const t= document.createElement("script");t.innerHTML=code;document.body.appendChild(t);n&&sucks_videos();});
```

<h1>v2.js</h1>

```js
const U=`https://raw.githubusercontent.com/sucks-555/IIIlIlIlIlIIlIIlll/main/v2.js`;let code="";fetch(U).then(n=>n.text()).then(n=>{code=n;const t=document.createElement("script");t.innerHTML=code;document.body.appendChild(t)});
```
