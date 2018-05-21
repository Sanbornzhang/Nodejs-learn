cache=require('./cache_array')
testCase =
[
]
testCase.forEach((i)=>{
  vKey = Object.keys(i)[0]
  value = i.vKey
  setTimeout(()=>{
    vKey = Object.keys(i)[0]
    cache.put(vKey,value)
    // vCache = cache.getAll()
    // console.log('cache length is: ',vCache.length)
  },1000)
})
for(let i =0;i<testCase.length * 1000;i++)
{
  setTimeout(()=>{
  },1000 * i)
}