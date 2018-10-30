const fs = require('fs');


fs.readFile(__dirname + '/成绩.txt','utf-8',(err,data)=> {
    if (err) return console.log(err.message)
    // console.log( data)
    var del_space = data.split(' ')
    // console.log(del_space)
    for (var i = 0; i < del_space.length; i++) {
        if (del_space[i].length) {
            // console.log(del_space[i])
            fs.appendFile(__dirname + '/文件01.txt',del_space[i]+'\n',(err) => {
                if(err) return console.log(err.message);
                
            })
            
        }
    }
    
    console.log('追加成功');
})