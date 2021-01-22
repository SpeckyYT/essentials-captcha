# Essentials-Captcha

## Installation
```
npm i --save essentials-captcha
```

## Example
```js
const essentials = require('essentials-captcha');

essentials()
.then(captcha => {
    console.log(captcha.url);       // image as url
    console.log(captcha.solution);  // solution as text
})

async function getCaptcha(){
    const captcha = await essentials();
    console.log(captcha.url);
    console.log(captcha.solution);
}
```

## Informations

[Original Essentials API Repository](https://github.com/Ammar-sys/essentials_api)

[API Website](https://ammarsysdev.pythonanywhere.com/)

[Discord Server](https://discord.gg/Fh5gmXQ)
