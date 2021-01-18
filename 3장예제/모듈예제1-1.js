const {odd, even} = require('./모듈예제1.js');

function checkOddOrEven(num) {
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;