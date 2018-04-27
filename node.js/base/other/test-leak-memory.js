const normalFunction = (aValue)=>{
  for(let i = 0; i < 1000000000; i++)
  {
    aValue = i;
  }
}
const loopFunction = (aFunction,aValue)=>{
  for(let i = 0; i < 10000000; i++)
  {
    aFunction(aValue);
  }
  console.log(aValue)
}
const leak = loopFunction
leak(normalFunction,1)
// normalFunction(1)