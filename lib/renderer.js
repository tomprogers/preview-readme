var request = require('superagent')
  , jade    = require('jade');

module.exports = function(text, token, fn) {
  var req = request.post("https://api.github.com/markdown/raw");
  req.set('Content-Type', 'text/plain');
  req.set('User-Agent', 'Username');
  if (token) req.set('Authorization', 'token ' + token);
  req.send(text).end(function(err, res) {
    if (err) throw err;
    // console.log(res);
    var html = jade.render(require('./template.js'), {data: res.text});
    fn(err, html);
  });
};
