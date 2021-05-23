const prompt = require('prompt')
const fs = require('fs')
const { toColor, toColorLog } = require('./toColor')
const colors = require('./colors')
const invalidOption = require('./error')
const re = /^[^\d\s]{3,}$/
const color = [
    {
  name: "UI Text Color",
  validator: re,
  warning: "Only accepting color name"
    },
    {
  name: "Player Text Color",
  validator: re,
  warning: "Only accepting color name"
    },
    {
  name: "Computer Text Color",
  validator: re,
  warning: "Only accepting color name"
    }
]

const colorHandler = (color) => {
  const arr = []
  for(let i in color) {
    try {
    if(colors.indexOf(color[i]) < 0){
    throw new invalidOption('One or some of the colors are not available')
    }
    arr.push(color[i])
    } catch (err) {
      console.error(err.message);
      toColorLog('\nAvailable color options:')
      colors.map(e => toColorLog(e))
      return
    }
  }

  fs.writeFileSync('./options.txt', `{
  "UIColor": "${arr[0]}",
  "playerColor": "${arr[1]}",
  "compColor": "${arr[2]}"\n}`)

console.log(toColor(`Your preferences have been saved!\n
Changes will take effect on the next run.`));
}

const toDefault = () => {
    fs.writeFileSync('./options.txt', `{
    "UIColor": "yellow",
    "playerColor": "green",
    "compColor": "redBright"\n}`)
    console.log(toColor(`Color setting has been reset to default!\n
Changes will take effect on the next run.`));
}

const changeColor = (def = false) => {
  if(def) return toDefault()
  console.log(toColor("Input only color name"));
  prompt.start()
  prompt.get(color)
    .then(v => colorHandler(v))
}

const viewColorSetting = () => {  
}

module.exports = changeColor