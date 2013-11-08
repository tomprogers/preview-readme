var fs       = require('fs')
  , connect  = require('connect')
  , http     = require('http')
  , renderer = require('./lib/renderer');

var app      = connect()
  , token    = process.env.PREVIEW_README_API_KEY || process.argv[2];

app.use(connect.static('public'));
app.use(function(req, res) {
  var readmeFiles = ["README", "README.md", "Readme.md", "README.markdown"]
    , chosenReadme;

  for (var i = 0; i < readmeFiles.length; ++i) {
    if (fs.existsSync(readmeFiles[i])) {
      chosenReadme = readmeFiles[i];
      break;
    }
  }

  if (!chosenReadme) {
    console.log('Could not locate a readme file.');
    return res.end('No readme file was found in this directory.');
  }

  fs.readFile(chosenReadme, {encoding: 'utf8'}, function(err, data) {
    if (err) throw err;
    renderer(data, token, function(err, rendered) {
      res.end(rendered);
    });
  })

});

http.createServer(app).listen(5000, function() {
  console.log("Readme.md rendered on localhost:5000");
});
