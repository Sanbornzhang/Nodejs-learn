// function foo() {
//   console.log(a)
// }
// function bar() {
//   var a = 3
//   foo()
// }

// var a = 2
// bar()

for (var i = 1; i < 5; i++) {
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    },1000)
  })(i)
}

for ( let i = 1; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}