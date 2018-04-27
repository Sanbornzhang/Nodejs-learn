const fs   = require('fs')
const path = require('path')
const http = require('http')
http.createServer((req,res)=>
{
  const url = req.url
  const headers = req.header
  const method = req.method
  var body = [];
  // console.log(req.socket)
  req.on('data',(chunk)=>{console.log(chunk)})
  req.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    // console.log(req)
    // console.log(body)

    // BEGINNING OF NEW STUFF

    res.on('error', function(err) {
      console.error(err);
    });
    let imageStream = fs.createReadStream( path.join(__dirname,'test.png'))
    imageStream.pipe(res)
    res.statusCode = 200;
    var stat = fs.statSync(path.join(__dirname,'test.png'));

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': stat.size
    });
    // res.setHeader('Content-Type', 'application/octet-stream');
    // Note: the 2 lines above could be replaced with this next one:
    // res.writeHead(200, {'Content-Type': 'application/json'})

    // var resBody = {
    //   headers: headers,
    //   method: method,
    //   url: url,
    //   body: body
    // };

    // res.write(JSON.stringify(resBody));
    // res.end();
    // Note: the 2 lines above could be replaced with this next one:
    // res.end(JSON.stringify(resBody))

    // END OF NEW STUFF
  });
}).listen(8080);
