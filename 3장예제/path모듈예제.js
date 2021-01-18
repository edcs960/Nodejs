const path = require('path');

const str = __filename;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('---------------------------------');
console.log('path.dirname(): ', path.dirname(str));
console.log('path.extname(): ', path.extname(str));
console.log('path.basename(): ', path.basename(str));
console.log('path.basename(): ', path.basename(str, path.extname(str)));
console.log('---------------------------------');
console.log('path.parse(): ', path.parse(str));
console.log('path.format(): ', path.format({
    dir: 'C:\\user\\Nodejs',
    name: 'path',
    ext: '.js'
}));
console.log('path.normalize(): ', path.normalize('C://user\\\\Nodejs\\\path모듈예제.js'));
console.log('---------------------------------');
console.log('path.isAbsolute(): ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(): ', path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative(): ', path.relative('C:\\users\\Nodejs\\path모듈예제.js'));
console.log('path.join(): ', path.join(__dirname,'..','..','/users','.','/Nodejs'));
console.log('path.resolve(): ', path.resolve(__dirname,'..','users','.','/Nodejs'));
console.log('');
