module.exports = [
  '!!!',
  'html',
  '  head',
  '    meta(charset="utf-8")',
  '    title GitHub Readme.md Preview',
  '    link(rel="stylesheet", href="/preview.css")',
  '    style .',
  '      .preview-page {width: 960px; margin: 64px auto;}',
  '  body',
  '    .preview-page',
  '      #readme.announce.md',
  '        article.markdown-body.entry-content',
  '          != data'
].join("\n");
