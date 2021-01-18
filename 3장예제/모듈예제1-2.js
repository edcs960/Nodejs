const {odd, even} = require('./모듈예제1.js');
const ckeckNumber = require('./모듈예제1-1.js');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(ckeckNumber(10));
console.log(checkStringOddOrEven('hello'));