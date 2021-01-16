const fs = require('fs');

fs.copyFile('readme.txt', 'writeme.txt', (err) => {
    if(err){
        return console.log(err);
    }
    console.log('복사 완료');
});
