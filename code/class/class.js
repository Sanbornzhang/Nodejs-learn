// /**
//  * Car constructor
//  * @param {*} model
//  * @param {*} name
//  * @param {*} proto
//  */
// function Car(model, name, proto = {}) {
//   this.model = model
//   this.name = name
// }
// const ts = new Car('xxx', 'ts')
// console.log(ts)

// /**
//  *  Person constructor
//  */
// class Person {
//   /**
//    *
//    * @param {*} obj
//    */
//   constructor(obj = {}) {
//     const vKeys = Object.keys(obj)
//     vKeys.forEach((key)=>{
//       this[key] = obj[key]
//     })
//   }
// }
// const san = new Person({name: 'san', age: 99})
// console.log(san)


// var testModel = (()=>{
//   var counter = 0
//   return {
//     incrementCounter: ()=>{
//       return ++counter
//     },

//     resetCount: ()=>{
//       console.log('counter is: ', counter)
//       counter = 0
//     },
//   }
// })()
// testModel.incrementCounter()
// testModel.incrementCounter()
// testModel.incrementCounter()
// testModel.incrementCounter()
// testModel.resetCount()

/**
 * PrivateClass
 */
function PrivateClass() {
  this.x = 'a'
  this.b = 'b'
  const privateFunc = ()=>{
    console.trace()
    console.log('can not do this')
  }
  const publicFunc = ()=>{
    console.log('publicFunc')
  }
  this.publicFunc = publicFunc
  return this
}
const testFunc = new PrivateClass()
testFunc.publicFunc()
testFunc.privateFunc()