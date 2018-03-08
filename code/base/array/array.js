

console.log((process.memoryUsage()).heapUsed/1024/1024);
// 生成 0-99的数组
array = Array(10000).fill(1).map((v,i)=>{return {18888888888:666666}})
console.log((process.memoryUsage()).heapUsed/1024/1024);
// console.log(array)
// array.forEach((i)=>{
//   array.splice(0)
//   console.log(array)
// });
// console.log(array)