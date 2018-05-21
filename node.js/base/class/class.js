class Human {
  constructor(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
  }
  get(){
    return this
  }
  save(human){
    let keys = Object.keys(human)
    keys.forEach(key=>{
      this[key] = human[key]
    })
  }
}3.

let san =  new Human('san',18,1)
let Jimmie  =  new Human('Jimmie ',22,1)
// console.log(Jimmie)
Jimmie.save({age:99})
// console.log(Jimmie)

function constructorHumane (name,age,sex){
  let human = {}
  human.name = name
  human.age = age
  human.sex = sex
  return human
}

let boom = new constructorHumane('boom ',22,1)
// console.log(boom)

// 会改变其他的实例的值 因为本质上这个就是属于原型链上的继承
function Base(){
  this.shareData = {
   name: 'lingxuan'
  }
}

function Child(){ }

Child.prototype = new Base();
Child.prototype.constructor = Child;
const child1 = new Child();
console.log(child1.shareData)

new Child().shareData.name = 'lingxuan630';
const base = new Base()
const child = new Child();
console.log(child.shareData,base.shareData,child1.shareData) // 输出了lingxuan630
