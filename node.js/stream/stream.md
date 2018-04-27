# Stream
## Base
Ref: [stream  中文手册]([https://github.com/jabez128/stream-handbook)
中文文档已经写的比较详细了.  
其他的就是看具体的API了
但是 在实际使用过程一般是文件的读取存储，文件属性的检查等。
但是也依托与业务 比如说图片处理 `shap` 这个模块中就可以对图片进行压缩等处理. 但之前 你可以加上文件属性的检测`fileAttributeStream`[文件属性检查可以用文件流读取当前12个字符就可以检查出来了] 这样会比较好点  
其他需要buffer 的还是用stream 读取出来再给下一个function吧 
