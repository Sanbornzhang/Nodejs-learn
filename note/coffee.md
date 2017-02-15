# coffee
怎么讲 反正用了 感觉还可以就是了
具体的教程在官网上有
refer to : http://coffee-script.org/

# for 操作

  `for a in b `  这是针对数组
  
  `for a of b ` 这是针对对象

## 数组操作 `indexOf`
  昨天很蛋疼的 一直在找 indexOfArray 
  因为 coffee 是在js外面包了一层 所以常规写法
  ```
  for(var i=0;i<aArray.length;i++)
    if aArray[i] === aValue)
      return i
  ```
  这种写法并不生效 --。
  然后 google了一下发现`indexOf` coffee 已经打包好了
  ```
  a=['1','2','3','4','5']
  console.log a.indexOf('4')
  ```
# 运算符
```
a ?= b
a or= b
```
设置默认值
`a = b unless a`
# @
@name 和 this.name　一个意思

# 参数列(...)
既可以用来接收参数(普通参数具有优先性)
又可以用来分割数组
```
function1 = (v1,v2...) ->
  console.log v1
  console.log v2
function1(1,2,2,2,2,2,3)

vArrayList = [1,2,3,4,5,6,7]
[...a,...b] = vArrayList
console.log a
```
  mark 一下！
