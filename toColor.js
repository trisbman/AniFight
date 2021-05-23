const chalk = require("chalk");
const fs = require('fs')

let UIColor = 'yellow'
let playerColor = 'green'
let compColor = 'redBright'

//Read file using async method
const setColor = () => new Promise((resolve,reject) => {
    fs.readFile('./options.txt', 'utf8' , (err, data) => {
        if (err) {
            resolve()
            return
        }
        data = JSON.parse(data)
        UIColor = data.UIColor
        playerColor = data.playerColor
        compColor = data.compColor
        resolve()
    })
})

//@params str: text to be colored
//@params n: use playerColor if 1, use compColor if 2
const toColor = (str, n) => {
    if(n) return n > 1 ? chalk[compColor].bold(str) : chalk[playerColor].bold(str);
    return chalk[UIColor].bold(str);
}

module.exports = { toColor, setColor }