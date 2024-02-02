const prompt = require("prompt");
const Tiger = require('./characters/tiger');
const Wolf = require('./characters/wolf');
const Lion = require('./characters/lion');
const Eagle = require('./characters/eagle');
const Elephant = require('./characters/elephant');

const InvalidOption = require("./errors/invalidOption");
const {
  getCurrentScore,
  plusCompScore,
  plusPlayerScore,
} = require("../config/score");
const { toColorLog, toColor } = require("./toColor");

const setChar = (char) => {
  switch (char) {
    case "Tiger":
      return new Tiger();
    case "Wolf":
      return new Wolf();
    case "Lion":
      return new Lion();
    case "Eagle":
      return new Eagle();
    case "Elephant":
      return new Elephant();
    default:
      return new InvalidOption("No such character!");
  }
};

const battleTurn = async (firstPlayer, secondPlayer, isOdd = false) => {
  const attacker = isOdd ? secondPlayer : firstPlayer;
  const defender = isOdd ? firstPlayer : secondPlayer;

  const attackerNameStr = toColor((attacker.isPlayer ? "[YOU] " : "[COMP] ") + `${attacker.name}`, attacker.isPlayer ? 1 : 2);
  const defenderNameStr = toColor((defender.isPlayer ? "[YOU] " : "[COMP] ") + `${defender.name}`, defender.isPlayer ? 1 : 2);

  let action;
  if (attacker.isPlayer) {
    toColorLog(attackerNameStr + toColor(`'s turn!`) + toColor(`\n1. Basic Attack\n2. ${attacker.skill.name}\n3. Surrender\n`));
    prompt.start();
    const response = await prompt.get({ name: "continue", description: "Select action" });
    action = response.continue;
  } else {
    action = Math.floor(Math.random() * 2 + 1).toString();
  }
  switch (action) {
    case "1":
      console.log(attackerNameStr + toColor(` used basic attack!`));
      console.log(defenderNameStr + toColor(` received ${attacker.basicAttack} damage!\n`));
      defender.hp -= attacker.basicAttack;
      break;
    case "2":
      console.log(attackerNameStr + toColor(` used ${attacker.skill.name}!`));
      console.log(defenderNameStr + toColor(` received ${attacker.skill.damage} damage!\n`));
      defender.hp -= attacker.skill.damage;
      break;
    case "3":
      attacker.hp = 0;
      break;
    default:
      throw new InvalidOption("Invalid option!");
  }

  console.log(attackerNameStr + toColor(` HP: ${attacker.hp} | ` + defenderNameStr + toColor(` HP: ${defender.hp}\n`)));

  if (defender.hp <= 0 || attacker.hp <= 0) {
    return null;
  }
  return battleTurn(firstPlayer, secondPlayer, !isOdd);
}

const battle = async (playerChar, compChar) => {
  const comp = setChar(compChar);
  const player = setChar(playerChar);
  player.isPlayer = true;

  console.log(toColor(`\n${player.name}`, 1) + toColor(" vs ") + toColor(`${comp.name}\n`, 2));

  if (player.speed >= comp.speed) {
    await battleTurn(player, comp);
  } else {
    await battleTurn(comp, player);
  }

  if (player.hp <= 0) {
    plusCompScore();
    console.log(toColor(`Computer`, 2) + toColor(` win!\nNice Try!\n`));
  } else if (comp.hp <= 0) {
    plusPlayerScore();
    console.log(toColor(`You`, 1) + toColor(` win!\nCongratulations!\n`));
  }

  getCurrentScore();
  toColorLog("(score reset is available from setting: `npm run setting`)");

  return [player, comp];
};

module.exports = battle;
