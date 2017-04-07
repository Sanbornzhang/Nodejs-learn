# callback

```
const main = (cb)=>{
  console.log("main Function")
  this.xx="ss"
  cb()
}
const callback1 = ()=>
{
  console.log(this)
}
const callback2 = ()=>
{
  console.log(this)
}

main(b)
main(c)
```