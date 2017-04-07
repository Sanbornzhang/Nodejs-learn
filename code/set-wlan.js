const exec = require('child_process').exec
exec('netsh interface ipv4 set address name="WLAN" source=static address=192.168.3.105 mask=255.255.255.0 gateway=192.168.3.1',(err,stdout,stderr)=>
{
  console.log("stdout",stdout.toString('utf8'))
})
exec('netsh interface IP set dns "WLAN" static 8.8.8.8',(err,stdout,stderr)=>
{
  console.log("stdout",stdout.toString('utf8'))
})