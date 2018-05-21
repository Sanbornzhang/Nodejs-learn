const p1 = ()=>{
  return new Promise((resolve, reject) => {
  return reject(new Error('aaa'))
})} 
const p2 = ()=>{
  return new Promise((resolve, reject) => {
  console.log('excute')
  return resolve(1)
})}

const p3 = ()=>{
  return new Promise((resolve, reject) => {
  console.log('excute')
  return resolve(1)
})}

Promise.all([p1(), p2(), p3()]).then(values => { 
  console.log(values); 
});