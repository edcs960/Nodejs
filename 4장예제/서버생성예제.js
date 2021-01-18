const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>서버생성예제</h1>');
    res.end('서버생성');
}).listen(8080,()=>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});