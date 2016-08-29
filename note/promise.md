# Promise
## 为什么使用Promise

```
func1("xxx", function (err,cb) {
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
### Promise化 非Promise方法

```
function2Promise = function(a)

  Promsie = new Promise()
  return new Promise (resolve,reject)->
    func1 a,(err,cb)->
      if err return reject(err)
      else return resolve(cb) #可以不要return  习惯了--。
  ```
  
## Promise reject
在非`Promise`中可以使用 reject 这个方法来return err

## Promise.map
 `Promise.map` 是比较常用的一个方法了
 ```
 Promise.map vListItems,(vItem,vIndex)->
   Promise function
 .then ()->
 .catch (err)->
 ```
