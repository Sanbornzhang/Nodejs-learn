# 特殊变量
##　arguments
arguments：是一个集合，包含了当前传入的参数
```
一般用法
callback = arguments[arguments.length - 1];
```
##　__dirname
获取当前目录的绝对路径
# export
```
module.exports =
  test: (aValue)->
      console.log aValue
# exports.test=test;
```
# 数组
1. 数组合并·
```
var c = a.concat( b );
a; // [1,2,3,4,5,6,7,8,9]
b; // ["foo","bar","baz","bam","bun","fun"]
c; // [1,2,3,4,5,6,7,8,9,"foo","bar","baz","bam","bun","fun"]
```
ES6:
```
a=[1,2,3]
b=[4,5,6]
c=[...a,...b]
[1, 2, 3, 4, 5, 6]
a
[1, 2, 3]
```
