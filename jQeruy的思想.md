### jQuery的精髓

#### 选中元素  对其操作

#### 链式编程  隐士迭代

###### jquery 中的ajax

```
1.导入<script src = "./templade的路径"></script>
2.创建模板 
<script	type='text/templade' id='temp_api'>
{{echo data}}
   each是循环   不是循环就直接用
   这里面也可以用{{if}}{{/if}}
{{/each}}
</script>


3.返回的数据用模板来渲染
var a = 1;
var b = 2;
$.ajax({	
	url: '跳转的文件路径',
	type: 'post或者get',
	//一般在后台用echo json_encode($res) 转成json文件,然后前台用dateType:'json'来接受
	data: {
          'a':a,
          'b':b,
			}
	dataType: 'json',
	//接收后台返回来的数据
	success:function(res) {
			//第二参数必须是对象,到时候样式模板只传入对象的成员就可以 比如res对象中的data
	$html = templade('templade的id',{})
		},
		});
		
})
```

###### 一. 选择网页元素

css选择器

```
//选择整个文档对象   $(document)
//选择ID为myid的网页元素   $('#myid')
//选择class为myclass的div元素   $('div.myclass')
//选择name属性等于 first的input的元素  $('input:[name=first]')
```

jquery的特有表达式

```
//选择网页中第一个a元素  $('a:first')
//选择表格的奇数行  $('tr:odd')
//选择表单id=myform中的input元素  $('#myform:input')
//选择可见的div元素   $('div:visible')
//选择所有的div元素,除了前三个   $('div:gt(2)')
//选择当前处于动画状态的div元素   $('div:animated')
```

###### 二. 改变结果集

强大的过滤器,对结果集进行筛选

```
//选择包含p元素的div元素   $('div').has('p')
//选择class不等于Myclass的div元素  $('div').not('.Myclass')
//选择class等于myclassd的div元素   $('div').filter('.myclass')
//选择第一个div元素    $('div').first()
//选择第6个div元素  $('div').eq(5)
```

DOM树的移动选择

```
//选择div元素后面的第一个p元素  $('div').next('p')
//选择div元素的父元素  $('div').parent()
//选择离div最近的那个父元素  $('div').closest('form')
//选择div的所有子元素  $('div').children()
//选择div的同级元素  $('div').siblings()
```

###### 链式编程

每次都返回的都是jquery对象,不同的操作可以连在一起

```
$('div).find('h3').eq(2).html('hello)
找到div元素,选择其中h3元素,选择第3个h3元素,将它的内容改为Hello
---这里eq(2)  类似于索引3,所以是第3位
```

.end()  让结果集后退一步

```
$('div').find('h3').eq(2).html('hello').end().eq(0).html('world')
执行到eq(2)时候没有返回对象,这是后退一步,指向所有的h3元素,然后选中第一个h3元素,将内容改为world
```

###### 元素的操作:取值和赋值

取值器和赋值器合并在一个方法中

```
html()中没有值就是取值器,有值就是赋值
$('h1').html()
$('h1').html('hello')
```

常见的取值和赋值函数如下

```
.html()   取出或设置html的内容
.text()   取出或设置text的内容
.attr()   取出或设置某个属性的值
.width()  取出或设置某个元素的宽度
.height() 取出或设置某个元素的高度
.val()    取出某个表单元素的值

--注意:同时包含多个元素的时候,赋值的时候是覆盖所有的元素,取值的时候是取第一个元素的值(.texe()则是取出所有的内容)
```

###### 元素的操作:移动

两组方法:相对于移动的元素和相对于被移动的元素

```
$('div').insertAfter($('p'))
.insertAfter()  把div元素移动p元素后面  返回div元素

$('p').after($('div'))
.after()   把p元素加到div元素前面   返回p元素
```

这种模式的有四对

```
.insertAfter()和.after()  在现存元素的外部,从后面插入元素
.insertBefore()和.before()  在现存元素的外部,从前面插入元素
.appendTo()和.append()  在现存元素的内部,从后面插入元素
.prependTo()和.prepend()  在现存元素的内部,从前面插入元素
```

###### 元素的复制.删除.创建

复制  .clone()     

删除元素 

.remove()  不保留删除的元素

.datach()    保留删除的元素  有利于后面插入

清空元素  但不是删除元素   .empty()

创建新元素

```
$('<p>Hello</p>');
$('<li class='new' > new list item</li>');
$('ul').append('<li>list item</li>')
```

###### 七.工具方法

```
//去除字符串两端的空格    $.trim()
//遍历一个数组对象     $.each()
//返回一个值在数组中的索引位置,如果没有就返回-1  $.inArray()
//返回数组中符合某种标准的元素  $.frep()
//将多个对象,合并到第一个对象   $.extend()
//将对象转化为数组   $.makeArray()
//判断对象的类型   $.type() 判断对象类型(函数 日期 数组 正则)
//判断某个参数是否是数组  $.isArray()
//判断某个对象是否为空    $.isEmptyObject()
//判断某个参数是否为函数    $.isFunction()
//判断某个参数是否为{}或new Object建立的对象  $.isPlainObject()
//判断浏览器是否支持某个特性  $.support()
```

###### 八. 事件操作

直接把事件绑定在页面元素之上

```
$('p').click(func) {
    alert('hello');
};
```

目前支持的事件

```
(.blur()  表单元素失去焦点  
.chenge()   表单元素的值发生改变
.click()   鼠标单击
.dblclicck()   鼠标双击
.focus()   表单元素获得焦点
.focusin()   子元素获得焦点
.focusout()  子元素失去焦点
.hover()    同时为mouseenter和mouseleave事件指定处理函数
.keydown()   按下键盘(长按只会返回一个事件)
.keypress()   按下键盘(长按将返回多个事件)
.keyup()     松开键盘
.load()     元素加载完毕
.mousedouwn()   按下鼠标
.mouseenter()   鼠标进入(进入子元素不触发)
.mouseleave()   鼠标离开(离开子元素不触发)
.mousemove()    鼠标在元素内部移动
.mouseout()     鼠标离开(离开子元素时候触发)
.mouseover()    鼠标进入(进入子元素时候触发)
.mouseup()      松开鼠标
.ready()        DOM 加载完成
.resize()       浏览器窗口大小发生变化
.scroll()       滚动条的位置发生变化
.select()       用户选中文本框中的内容
.submit()       用户递交表单
.toggle()       根据鼠标点击的次数,依次运行多个函数
.unload()       用户离开页面 
```

.bind() 可以绑定多个事件

```
$('input').bind(
    //同时绑定click change 事件
	'click change';
	function() {
        alert('Hello')
	}
)
```

还可以绑定一件事  .one()

```
$('p').one('click', function(){
    alert('hello')  //值运行一次, 以后点击就不会执行
})
```

接触事件绑定 .unbind()

```
$('p').unbind('click')
```

所有的事件处理函数, 都可以接受一个事件对象作为参数

```
$('p').click(function(e) {
    alert(e.type);    //click 
})
```

事件对象有一些属性和方法

```
event.pageX    事件发生时,鼠标距离页面左上角的水平距离
event.pageY    事件发生时,鼠标距离页面做上角的垂直距离
event.type     事件的类型
event.which    按下了哪一个键
```

