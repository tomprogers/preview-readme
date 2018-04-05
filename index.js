var fs       = require('fs');
var connect  = require('connect');
var http     = require('http');
var renderer = require('./lib/renderer');

var app      = connect();
var token    = process.env.README_PREVIEW_API_KEY || process.argv[2];

var readmeFiles = [
	'readme',
	'README',
	'Readme',
	'readme.md',
	'README.MD',
	'Readme.md',
	'readme.markdown',
	'README.MARKDOWN',
	'Readme.markdown'
];

app.use(function(req, res) {
	var chosenReadme;
	
	for(var i = 0; i < readmeFiles.length; ++i) {
		if(fs.existsSync(readmeFiles[i])) {
			chosenReadme = readmeFiles[i];
			break;
		}
	}
	
	if(!chosenReadme) {
		console.log('Could not locate a readme file.');
		return res.end('No readme file was found in this directory.');
	}
	
	fs.readFile(chosenReadme, { encoding: 'utf8' }, function(err, data) {
		if(err) throw err;
		
		renderer(data, token, function(err, rendered) {
			res.end(rendered);
		});
	});
});

http.createServer(app).listen(5000, function() {
	console.log("previews of README available at http://localhost:5000");
});
