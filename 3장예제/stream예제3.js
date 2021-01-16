const fs = require('fs');

const readStream = fs.createReadStream('./writeStream.txt');
const writeStream = fs.createWriteStream('./pipe.txt');
readStream.pipe(writeStream);