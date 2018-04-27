let cache = []
let size  = 0
let maxSize = 20
let vMaxAge = 1000 * 10
const indexOfArray=(aArray,aValue)=>{
  let vMaxCount = aArray.length
  let loopCount = vMaxCount/2
  if(aArray[loopCount] === aValue)
  {
    return loopCount
  }
  for(let i = 0; i < loopCount; i++)
  {
    -- vMaxCount
    if (aArray[i].key === aValue.key)
    {
      return i
    }
    else if (aArray[vMaxCount].key === aValue.key)
    {
      return vMaxCount
    }
  }
  return -1
}
const put = (vKey,aValue)=>
{
  if(cache.length === maxSize)
  {
    clearTimeout(cache[maxSize-1].timmer)
    cache.splice(maxSize-1,1)
  }
  else if((vIndex = indexOfArray(cache,{key: vKey,value:aValue})) !== -1)
  {
    clearTimeout(cache[vIndex].timmer)
    cache.splice(vIndex,1)
  }
  vObj = {key: vKey,value:aValue,}
  console.log('start date is: ',new Date(Date.now()))
  vObj.timmer = setTimeout(()=>{
    let vIndex = indexOfArray(cache,{key: vKey,value:aValue})
    console.log('clearn:',cache[vIndex].key)
    console.log('clearn date is: ',new Date(Date.now()))
    cache.splice(vIndex,1)
  },vMaxAge)
  cache.push(vObj)
}
const find = (vCoulmn)=>
{
  let vIndex = indexOfArray(cache,vCoulmn)
  return cache[vIndex]
}
const deleteColumn = (vCoulmn)=>
{
  vIndex = indexOfArray(cache,vCoulmn)
  clearTimeout(cache[vIndex].timmer)
  cache.splice(vIndex,1)
}
const getAllCache=()=>
{return cache}
exports.put =put
exports.find = find
exports.index = indexOfArray
exports.delete = deleteColumn
exports.getAll = getAllCache