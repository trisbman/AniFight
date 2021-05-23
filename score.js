const fs = require('fs')
const { toColorLog } = require('./toColor')
let playerScore
let compScore

fs.readFile('./scores.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
  
    data = JSON.parse(data)
    playerScore = data.playerScore
    compScore = data.compScore
})

const resetScore = () => fs.writeFileSync('./scores.txt',
`{
        "playerScore": "0",
        "compScore": "0"        
}`
)

const plusScore = () => fs.writeFileSync('./scores.txt',
`{
        "playerScore": "${++playerScore}",
        "compScore": "${++compScore}"        
}`
)

const minusScore = () => fs.writeFileSync('./scores.txt',
`{
        "playerScore": "${--playerScore}",
        "compScore": "${--compScore}"        
}`
)

const getCurrentScore = () => toColorLog(`\nPlayer Score: ${playerScore}`, 1) + toColorLog(`Computer Score: ${compScore}`, 2)

module.exports = { resetScore, plusScore, minusScore, getCurrentScore }
