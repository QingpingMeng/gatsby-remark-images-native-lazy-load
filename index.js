const visit = require("unist-util-visit")
const chalk = require(`chalk`)

  module.exports = ({ markdownAST, reporter }, pluginOptions) => {
    const loading = pluginOptions.loading
    if (![`lazy`, `eager`, `auto`].includes(loading)) {
      reporter.warn(
        reporter.stripIndent(`
        ${chalk.bold(loading)} is an invalid value for the ${chalk.bold(
          `loading`
        )} option. Please pass one of "lazy", "eager" or "auto".
      `)
      )
    }

    // handle all image nodes
    visit(markdownAST, "image", node => {
     
      const html = `
            <img src='${node.url}' alt='${node.alt}' loading='${pluginOptions.loading}' />
          `
      node.type = "html" // this breaks the node type, so always use this plug in at last
      node.children = undefined
      node.value = html
    })

    return markdownAST
  }