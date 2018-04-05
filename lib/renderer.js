var request = require('superagent');
var jade    = require('jade');
var parser  = require('markdown-it')('commonmark');

module.exports = function(text, token, fn) {
	var htmlFormatted = parser.render(text);
	
	try {
		var h1s = /<h1[^>]*>.*?<\/h1>/ig.exec(htmlFormatted.replace(/\s+/g, ' '));
		var firstH1Text = h1s[0].replace(/<[^>]+>/gi, '').trim();
		var title = firstH1Text;
	} catch(e) {
		console.log(e);
		var title = 'README';
	}
	
	var html = jade.render(require('./template.js'), { title: title, data: htmlFormatted });
	fn(null, html);
};
