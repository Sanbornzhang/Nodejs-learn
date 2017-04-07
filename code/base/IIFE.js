let a = 2;
(function IIFE(g) {
let a = 3;
console.log( a );
console.log( g );
})(a);
console.log( a );


var a = 2;
(function IIFE( def )
  { def( window );
  }
)(function def( global )
  {
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2
  });