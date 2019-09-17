import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt()

  md.use(require('markdown-it-highlightjs'))

  inject('md', md)
}
