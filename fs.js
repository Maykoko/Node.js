//导入fs模块
const fs = require('fs');
// //读文件
// fs.readFile('文件01.txt','utf-8',function(err,data) {
// 	if (err) {
// 		return console.log('读取文件失败'+err.message);
// 	}
// 	console.log(data)
// })


//写文件
fs.writeFile('文件01.txt','这是我写的文件',function(err) {
	if(err) {
		console.log(err.message);
	}
	console.log("ok")
})

//文件内容追加
fs.appendFile('文件01.txt','这是我写的文件2', function() {
	if(err) {
		console.log(err.message);

	}
	console.log('OK')
})
