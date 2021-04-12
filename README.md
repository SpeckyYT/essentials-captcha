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

## Options

```js
const options = {
    level: 1            // 1 = 'new' generator | 2 = 'old' generator
    style: 'text'       // style of the captcha: 'text' | 'math'
    retry: 0            // times to retry on errors (1 is recommended)
    fetchImage: false   // automatically fetches the image to "Captcha.image"
}
```

```js
const options = {
    fetchImage: true
}

const captcha = await essentials(options);
console.log(captcha.image);
require('fs').writeFileSync('captcha.png', captcha.image);
```

## Informations

[Original Essentials API Repository](https://github.com/Ammar-sys/essentials_api)

[API Website](https://ammarsysdev.pythonanywhere.com/)

[Discord Server](https://discord.gg/Fh5gmXQ)
