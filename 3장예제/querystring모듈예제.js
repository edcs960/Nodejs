const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://www.google.com/search?hl=ko&biw=1416&bih=927&sxsrf=ALeKk03GHgACtTFQLVjz-GHLB5Ar5kBBFg%3A1610620546530&ei=gh4AYJj2H4LO-QbC-KHgDQ&q=nodejs+exports%EB%9E%80&oq=nodejs+exports%EB%9E%80&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQIyBQgAEM0CMgUIABDNAjIFCAAQzQIyBQgAEM0COgQIIxAnUO8MWO8MYIYPaABwAHgAgAGbAYgBtAKSAQMwLjKYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwiYv6yMnZvuAhUCZ94KHUJ8CNwQ4dUDCA0&uact=5');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystring.stringify(): ',querystring.stringify(query));