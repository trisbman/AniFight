const prompt = require('prompt')
const fs = require('fs')
const { toColor } = require('./toColor')
const chalk = require('chalk')
const re = /^[^\d\s]{3,}$/
const color = [
    {
  name: "UIColor",
  validator: re,
  warning: "Only accepting color name"
    },
    {
  name: "playerColor",
  validator: re,
  warning: "Only accepting color name"
    },
    {
  name: "compColor",
  validator: re,
  warning: "Only accepting color name"
    }
]

prompt.start()
prompt.get(color)
    .then(v => {
        fs.writeFileSync('./options.txt', `{
        "UIColor": "${v.UIColor}",
        "playerColor": "${v.playerColor}",
        "compColor": "${v.compColor}"\n}`)
    console.log(chalk.bold('Your preferences have been saved!'));
    }
    )
