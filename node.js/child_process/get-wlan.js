const exec = require('child_process').exec
exec("netsh wlan show interface",(err,stdout,stderr)=>
{
  console.log("stdout",stdout.toString('utf8'))
  const vInterface = stdout.toString('utf8')
  const vRegexp = /ss/
})