# Nodejs优化

## nodejs 与 v8
[v8 wiki](https://github.com/v8/v8/wiki)
### 优化的一些方法
1. 基础的一些优化方式: [Node.js背后的V8引擎优化技术](http://www.admin10000.com/document/6984.html)
2. Google I/O : [Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw)
3. Google I/O :[Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g)
4. Google Dev : [Structural and Sampling (JavaScript) Profiling in Google Chrome](https://www.youtube.com/watch?v=nxXkquTPng8)
5. Stackoverflow: [How do I debug Node.js applications?](http://stackoverflow.com/questions/1911015/how-do-i-debug-node-js-applications/16512303#16512303)
6. [v8-optimization-checklist](http://mrale.ph/blog/2011/12/18/v8-optimization-checklist.html)
7. [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch5.md)
8. node命令   : [Node.js 调试 GC 以及内存暴涨的分析](http://blog.csdn.net/shmnh/article/details/46437933)
9. chrome `chrome://about/` `chrome://tracing/`
10. http://www.tuicool.com/articles/UNbuyyI
11. [Optimization-killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)
12. [编写高性能JS](http://kb.cnblogs.com/page/501177/)

## 内存泄露追踪

devTool 

## node 命令
1. `--v8-options` 可以显示出所有与V8相关的选项
2. `--trace_gc` 追踪GC
3. `--prof` V8 Profile 日志导出：
4. `node --trace-deopt *.js` 查询不能被优化的函数
5. `node --trace-opt *.js`` 查询能被优化的函数

## ES6

[ES6标准入门](http://es6.ruanyifeng.com/)

## 