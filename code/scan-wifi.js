const exec = require('child_process').exec
exec("netsh wlan show networks mode=Bssid",(err,stdout,stderr)=>
{
  console.log("stdout",stdout.toString('utf8'))
})