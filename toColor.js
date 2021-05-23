const chalk = require("chalk");

const UIColor = 'yellow'
const playerColor = 'green'
const compColor = 'redBright'

//@params str: text to be colored
//@params n: use playerColor if 1, use compColor if 2
const toColor = (str, n) => {
    if(n) return n > 1 ? chalk[compColor].bold(str) : chalk[playerColor].bold(str);
    return chalk[UIColor].bold(str);
}

module.exports = toColor