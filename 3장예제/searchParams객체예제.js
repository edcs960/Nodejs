const {URL} = require('url');

const myURL = new URL('https://github.com/edcs960?tab=overview&from=2021-01-01&to=2021-01-15');
console.log('searchParams: ', myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('from'));
console.log('searchParams.get(): ', myURL.searchParams.get('to'));
console.log('searchParams.has(): ', myURL.searchParams.has('from'));
console.log('searchParams.keys(): ', myURL.searchParams.keys());
console.log('searchParams.values(): ', myURL.searchParams.values());

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString(): ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();