const fs = require("fs");
const { toColorLog } = require("./toColor");

let playerScore;
let compScore;

fs.readFile("./scores.txt", "utf8", (err, data) => {
  if (err) {
    playerScore = 0;
    compScore = 0;
    return;
  }

  const value = JSON.parse(data);
  playerScore = value.playerScore;
  compScore = value.compScore;
});

const resetScore = () =>
  fs.writeFileSync(
    "./scores.txt",
    `{
        "playerScore": "0",
        "compScore": "0"        
}`
  );

const plusPlayerScore = () => {
  playerScore = parseInt(playerScore, 10) + 1;
  fs.writeFileSync(
    "./scores.txt",
    `{
        "playerScore": "${playerScore}",
        "compScore": "${compScore}"        
}`
  );
};
const plusCompScore = () => {
  compScore = parseInt(compScore, 10) + 1;
  fs.writeFileSync(
    "./scores.txt",
    `{
        "playerScore": "${playerScore}",
        "compScore": "${compScore}"        
}`
  );
};

const getCurrentScore = () =>
  toColorLog(`\nCurrent score:`) +
  toColorLog(`Player's score: ${playerScore}`, 1) +
  toColorLog(`Computer's score: ${compScore}`, 2);

module.exports = {
  resetScore,
  plusPlayerScore,
  plusCompScore,
  getCurrentScore,
};
