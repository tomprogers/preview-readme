module.exports = [
  '!!!',
  'html',
  '  head',
  '    meta(charset="utf-8")',
  '    title GitHub Readme.md Preview',
  '    link(rel="stylesheet", href="https://www.npmjs.com/static/css/index.css")',
  '    style .',
  '      .preview-page {width: 672px; margin: 64px auto;}',
  '  body',
  '    .preview-page',
  '      #readme.announce.markdown',
  '        article.markdown-body.entry-content',
  '          != data'
].join("\n");
