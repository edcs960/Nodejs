const fs = require('fs');

fs.readFile('./a', (err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});