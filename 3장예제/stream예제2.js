const fs = require('fs');

const writeStream = fs.createWriteStream('./writeStream.txt');
writeStream.on('finish',() => {
    console.log('파일 쓰기 완료');
});

writeStream.write('스트림 방식으로');
writeStream.write('파일을 작성중입니다.');
writeStream.end();