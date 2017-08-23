var request = require('superagent')
  , jade    = require('jade');

module.exports = function(text, token, fn) {
  var req = request.post("https://api.github.com/markdown/raw");
  req.set('Content-Type', 'text/plain');
  req.set('User-Agent', 'Username');
  if (token) req.set('Authorization', 'token ' + token);
  req.send(text).end(function(err, res) {
    if (err) throw err;

    try {
      var h1s = /<h1[^>]*>.*?<\/h1>/ig.exec(res.text.replace(/\s+/g, ' '));
      var firstH1Text = h1s[0].replace(/<[^>]+>/gi, '').trim();
      var title = firstH1Text;
    } catch(e) {
      console.log(e);
      var title = 'README';
    }

    var html = jade.render(require('./template.js'), { title: title, data: res.text });
    fn(err, html);
  });
};
