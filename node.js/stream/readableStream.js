const Readable = require('stream').Readable
const fs = require('fs')
const rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

rs.pipe(process.stdout);

const rs2 = Readable();
let c = 97;
rs2._read = function () {
    rs2.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs2.push(null);
};

rs2.pipe(process.stdout);
readFileStream = fs.createReadStream(`${__dirname}/test`)
const removeLine8 = ()=>{

}
let loopCount = 0
readFileStream
.on('data',(chunk)=>{
  console.log(chunk.toString('utf8'))
  ++loopCount
  console.log('======================\n',loopCount)
})
readFileStream.pipe(process.stdout)
