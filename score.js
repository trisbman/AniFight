const fs = require('fs')
const { toColorLog } = require('./toColor')
let playerScore
let compScore

fs.readFile('./scores.txt', 'utf8' , (err, data) => {
    if (err) {
        playerScore = 0
        compScore = 0
        return
    }
  
    data = JSON.parse(data)
    playerScore = data.playerScore
    compScore = data.compScore
    return
})

const resetScore = () => fs.writeFileSync('./scores.txt',
`{
        "playerScore": "0",
        "compScore": "0"        
}`
)

const plusPlayerScore = () => fs.writeFileSync('./scores.txt',
`{
        "playerScore": "${++playerScore}",
        "compScore": "${compScore}"        
}`
)

const plusCompScore = () => fs.writeFileSync('./scores.txt',
`{
        "playerScore": "${playerScore}",
        "compScore": "${++compScore}"        
}`
)

const getCurrentScore = () => toColorLog(`\nCurrent score:`) + toColorLog(`Player's score: ${playerScore}`, 1) + toColorLog(`Computer's score: ${compScore}`, 2)

module.exports = { resetScore, plusPlayerScore, plusCompScore, getCurrentScore }
