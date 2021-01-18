const fs = require('fs');
const { setFlagsFromString } = require('v8');

fs.writeFile('./writeb.txt', '글이 입력됩니다.', (err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeb.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});