const prompt = require('prompt');
const changeColor = require('./changeColor');
const invalidOption = require('./error');
const { setColor, toColorLog } = require('./toColor')
const choice = {
    name: "choice",
    validator: /\d+/
}


const choiceHandler = (n) => {
    switch(parseInt(n)){
        case 1:
            return changeColor()            
        case 2:
            return changeColor(true);
        case 3:            
        case 4:
        default:
            toColorLog("Invalid option or not available yet!")
    }
}


prompt.start()

setColor()
    .then(() => toColorLog(`Setting options:\n
1. Change text color\n
2. Reset text color\n`
// 3. Change list-view\n
// 4. Reset list-view\n
// 5. View current settings\n
))
    .then(() => prompt.get(choice))
    .then(v => choiceHandler(v.choice))