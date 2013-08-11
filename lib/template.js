module.exports = [
  '!!!',
  'html',
  '  head',
  '    meta(charset="utf-8")',
  '    title GitHub Readme.md Preview',
  '    link(rel="stylesheet", href="https://github.global.ssl.fastly.net/assets/github-697b506a0b29d9891d9591c88950d8c4ab0c7c0b.css")',
  '    link(rel="stylesheet", href="https://github.global.ssl.fastly.net/assets/github2-d3cdff01428383b2670dce9b781434be7c9d37e8.css")',
  '    style .',
  '      .preview-page {width: 960px; margin: 64px auto;}',
  '  body',
  '    .preview-page',
  '      #readme.announce.md',
  '        article.markdown-body.entry-content',
  '          != data'
].join("\n");
