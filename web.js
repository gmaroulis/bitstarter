
var express = require('express');
var fs = require('fs');
var data = fs.readFileSync('index.html', 'utf8');
var buf = new Buffer(data);
buf = buf.toString();
console.log(buf);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
