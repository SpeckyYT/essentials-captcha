const fetch = require('node-fetch');
const endpoint = 'https://ammarsysdev.pythonanywhere.com/api/img';
const captcha = () => fetch(endpoint).then(res => res.json());
module.exports = captcha;
