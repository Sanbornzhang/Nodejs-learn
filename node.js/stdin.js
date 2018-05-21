process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`User Input is: ${chunk}`);
    process.stdin.end();
    // console.log(process.stdin)
  }
});
