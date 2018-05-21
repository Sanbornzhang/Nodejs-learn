const main = (cb)=>{
  console.log("main Function")
  this.xx="ss"
  ss="aaa"
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

main(callback1)
main(callback2)