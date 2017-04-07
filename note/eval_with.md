# eval
通常式用来执行动态创建的代码

```
function a (b){
  eval(b)
}
a('console.log("there will be console")')
```

# with


# 总结
这两个再严格模式下虽然能用 但是解析器并不会对所做的代码进行优化 那么就导致了 执行效率会很低