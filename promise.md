# Promise
## 为什么使用Promise
```func1("xxx", function (err,cb) {
  // something
  func2("xxx", function (err,cb) {
    // something
    func3("xxxx", function (err,cb) {
      // something
      ...
    });
  });
});
```
这段代码嵌套的回掉并不长。。。 要是要很多异步 很多cb的话。。。感觉上就很麻烦
使用promise的话就相对简单一点

## Promise 基础
在nodejs 基本上用的是 bluebird
使用方式
```
npm i bluebird --save
Promise = require 'bluebird'
```
promise 
具体使用的就是2个

```
.then ()->
```
在`.then`中 是完成了的 成功执行后的对象

```
.catch (err)->
```
在 catch中是err的对象

## Promise

