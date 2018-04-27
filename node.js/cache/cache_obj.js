let vSize = 1
let Cache = Object.create(null)
let vMaxAge = 1000 * 60 * 10
let vMaxSize = 10000
let IndexMap = Object.create(null)

// this is not easy with array

const put = function(aKey,aValue)
{
  vIndex = vSize < vMaxSize ? vSize : vSize % vMaxSize
  if (vColumn = this.find(aKey))
  {
    clearTimeout(vColumn.timmer)
    // there will change < aKey.index index + 1 and aKey will be 1st and will change time out
    // ##########################################
    // # maxcount:5
    // # ==================================
    // # 1:obj1 2:obj2 3:obj3 4:obj4 5:obj5
    // # ==================================
    // # 3 update to obj3changed
    // # delete last one 5:obj
    // # new cache will like
    // # ==================================
    // # 1:obj3changed 2:obj3 3:obj2 4:obj4 5:obj5
    // # ==================================
    // there will spend 2N time cause other indexMap will update too
    this.IndexMap
  }
  else if(vSize > vMaxSize)
  {
    clearTimeout(this[vMaxSize].timmer)
    delete this.IndexMap[this[vMaxSize]]
    delete this[vMaxSize]
    // there will change all index + 1
    // ##########################################
    // # maxcount:5
    // # ==================================
    // # 1:obj1 2:obj2 3:obj3 4:obj4 5:obj5
    // # ==================================
    // # new obj comming
    // # delete last one 5:obj
    // # new cache will like
    // # ==================================
    // # 1:obj6 2:obj1 3:obj2 4:obj3 5:obj4
    // # ==================================
    // there will spend 2N time cause other indexMap will update too
  }

  let vObject =
  {
    key: aKey,
    vaule: aValue,
  }

  vObject.timmer = setTimeout(
    ()=>
    {
      del(aKey)
    },this.vMaxAge
  )
  this[vIndex] = vObject
  this.IndexMap[aKey] = vIndex
  ++vSize
}

const find = function(aKey)
{
  vResult = this.IndexMap[aKey] ? this[this.IndexMap[aKey]] : null
  return vResult
}

const del = function(aKey)
{
  let ID = this.IndexMap[aKey]
  delete this.IndexMap[aKey]
  delete this[ID]
}