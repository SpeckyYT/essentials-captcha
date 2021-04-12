const fetch = require('node-fetch');
const { format } = require('url');

const protocol = 'https';
const host = 'ammarsysdev.pythonanywhere.com';
const endpoint = 'api/img';

const defaultOptions = {
    level: '1',
    style: 'text',
};
const availableStyles = [
    'math',
    'text',
];
const levelAliases = [
    'new',
    'old',
]

function parseOptions(options){
    const newOptions = {};

    if(typeof options != 'object') options = {};

    if(['string','number'].includes(typeof options.level)){
        const level = `${options.level}`.toLowerCase();
        const index = levelAliases.indexOf(level) + 1;
        newOptions.level = `${index || level}`;
    }

    const style = `${options.style}`.toLowerCase();
    if(availableStyles.includes(style)) newOptions.style = style;

    if(typeof options.retry == 'number')
        newOptions.retry = options.retry - 1;

    newOptions.fetchImage = Boolean(options.fetchImage);

    return Object.assign({}, defaultOptions, newOptions);
}

function parseQuery(options){
    const query = {};
    if(typeof options.level != 'undefined') query.level = options.level;
    if(typeof options.style != 'undefined') query.style = options.style;
    return query;
}

function captcha(opt){
    const options = parseOptions(opt);
    const query = parseQuery(options);

    const url = format({
        protocol: protocol,
        host: host,
        pathname: endpoint,
        query: query,
    });

    return fetch.default(url)
    .then(r => r.json())
    .then(async res => {
        if(options.fetchImage)
            await fetch.default(res.url)
            .then(r => r.buffer())
            .then(r => res.image = r);
        return res;
    })
    .catch(err => {
        console.log(options)
        if(typeof options.retry == 'number' && options.retry >= 0){
            delete options.level;
            return captcha(options);
        }
        throw err;
    })
}

module.exports = captcha;
