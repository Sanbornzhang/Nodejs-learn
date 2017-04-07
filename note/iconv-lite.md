# iconv-lite
iconv-lite 是用来做字符编码转换的

```
iconv = require('iconv-lite')
iconv.encode("中文字符",'UTF-8').toString()
```
或者在http require的时候加上 字符集转换
## request
`options{encoding: null}`
## superagent
```
charset = require('superagent-charset');
charset(request)
.get("www.baidu.com")
.charset('gbk')
```