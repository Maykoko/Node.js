const fs = require('fs');


fs.readFile(__dirname + '/成绩.txt','utf-8',(err,data)=> {
    if (err) return console.log(err.message)
    console.log(data)
  
})