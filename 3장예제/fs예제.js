const fs = require('fs');

fs.access('./exmkdir', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if(err){
        if(err.code === 'ENOENT'){
            console.log('폴더 없음');
            fs.mkdir('./exmkdir', (err) => {
                if(err) {
                    throw err;
                }
                console.log('폴더 만들기 성공');
                fs.open('./exmkdir/makefile.js','w',(err, fd) => {
                    if(err){
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공',fd);
                    fs.rename('./exmkdir/makefile.js', './exmkdir/renamefile.js', (err) => {
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공');
                    });
                });
            });
        } else{
            throw err;
        }
    }else{
        console.log('이미 폴더 있음');
    }
});