const url = require('url');

const URL = url.URL;
const myURL = new URL('https://github.com/edcs960');
console.log('new URL(): ', myURL);
console.log('url.format()', url.format(myURL));
console.log('---------------------------------');
const parseUrl = url.parse('https://github.com/edcs960');
console.log('url.parse(): ',parseUrl);
console.log('url.format(): ',url.format(parseUrl));