const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const { promises } = require("fs");

setImmediate(() => {
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});

setTimeout(()=>{
    console.log('timeout');
},0);

Promise.resolve().then(()=>console.log('promise'));