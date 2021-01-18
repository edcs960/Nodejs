const fs = require('fs');

//동기방식으로 파일 읽기
console.log('파일 읽기 시작');
var a = fs.readFileSync('./a');
console.log(a.toString());

var b = fs.readFileSync('./writeb.txt');
console.log(b.toString());
console.log('파일 읽기 끝');