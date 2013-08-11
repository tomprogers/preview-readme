var fs       = require('fs')
  , connect  = require('connect')
  , http     = require('http')
  , renderer = require('./lib/renderer');

var app = connect();

fs.readFile('Readme.md', {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;
  renderer(data, function(err, rendered) {
    app.use(function(req, res) {
      res.end(rendered);
    });
  });
});

http.createServer(app).listen(5000, function() {
  console.log("Readme.md rendered on localhost:5000");
});
