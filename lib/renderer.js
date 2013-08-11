var request = require('superagent')
  , jade    = require('jade');

module.exports = function(text, fn) {
  request
    .post("https://api.github.com/markdown/raw")
    .set('Content-Type', 'text/plain')
    .send(text)
    .end(function(err, res) {
      var html = jade.render(require('./template.js'), {data: res.text});
      fn(err, html);
    });
};
