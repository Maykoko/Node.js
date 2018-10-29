let tree = {
	name :'大树',
	age:'110',
	eat : function() {
		console.log('我喜欢阳光')
	}
}

const {name:user_name, age} = tree;
// console.log(user_name)
// console.log(age)
user_name = '老槐树';
console.log(user_name);