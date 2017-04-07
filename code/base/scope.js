const testAnonymousFunctionScope = (()=>{
  testFunction()
  anonymousFunction()
  const anonymousFunction = (()=>
  {
    console.log('this case will throw err')
  })
  function testFunction()
  {
    console.log('will be console');
  }
})
const scopeValue = ((aValue)=>{ //aValue = LHS
  let b = aValue * 2
  this.b = b
  console.log(this)
  const bar = ((aValueC)=>{
    console.log(aValue,b,aValueC,this)
    // change b value so cann't console last scope.b.
    // First will find this scope.
    // So sometime this is very important
    b = 2222
    console.log(aValue,b,aValueC,this)
    this.b = b // there will change last scope.this
    // cause js object is pass-by-reference
  })
  bar( b * 3 )
})
const testI = ()=>
{
  for(var i = 0; i < 10; i++)
  {
    console.log(i)
  }
  console.log('there will be console i:',i)
}

const testLetI = ()=>
{
  for(let i = 0; i < 10; i++)
  {
    console.log(i)
  }
  console.log('there will thrwo error with i',i)
}
scopeValue(2) // scopeValue RHS
testI()
testLetI()
// testAnonymousFunctionScope()