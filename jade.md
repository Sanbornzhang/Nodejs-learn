# jade
Jade 是一个高性能的模板引擎，它深受 Haml 影响，它是用 JavaScript 实现的，并且可以供 Node 使用。 （百度的。。。）

# div calss的一些使用

```
div#id.calss.class2
```

生成出来的效果就是
```
<div id="id" class="calss class2"></div>
```

如果你的calss并不能满足你？
```
div(style={})
```
那你可以这样写

div 写的多了？
那么
```
#id
.class
```

# 那么后端的数据使用呢？
```
#{data}
```
数据的使用呢？
```
- each item in data
  li=item
```

for 还是和 js 一致的
```
- for(var i=0;i<xxx.length;i++)
  li data[i]
```

# 写js jsquery
```
script(type='text/javascript').
```
# 更多
  基本上上面的我就觉得够用了。。。
  更多了的话可以看 ：http://jade-lang.com/reference/attributes/

