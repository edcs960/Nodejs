const fs = require('fs');

fs.readdir('./exmkdir',(err, dir) => {
    if(err){
        throw err;
    }
    console.log('폴더 내용 확인', dir)
    fs.unlink('./exmkdir/renamefile.js', (err) => {
        if(err){
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./exmkdir', (err)=>{
            if(err){
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});