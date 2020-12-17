const chalk = require('chalk')
const basePkg = require('./basePkg')

module.exports = async function injectGenerator(api) {
  const config = basePkg
  api.extendPackage(config)
  api.render('', {
    sourceBasePath: 'content'
  })

  api.afterGenerate((cliOptions) => {
    const commands = [
      `cd ${cliOptions.name}`,
      `${cliOptions.packageManager} test`
    ]
    const tip = `────────────────────────────────────────
你已经完成了项目的初始化。快速开始项目只需简单的两步：
  1. ${chalk.yellow(commands[0])}
  2. ${chalk.yellow(commands[1])}
────────────────────────────────────────
`
    console.log(tip)
  })
}
