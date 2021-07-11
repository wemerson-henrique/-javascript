var http=require('http');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-type':'text/plain'});
  res.end('HELLO, WORLD!');
  console.log("Mensagem de log no console");

}).listen(8080);