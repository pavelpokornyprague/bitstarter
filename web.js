var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {


  buf = new Buffer(65000);

  buf = fs.readFileSync("index.html");
  console.log("read from file::" + buf.toString());


  response.send(buf.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
