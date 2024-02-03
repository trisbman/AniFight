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

const showHp = (attacker, defender, isOdd) => {
  const attackerNameStr = toColor((attacker.isPlayer ? "[YOU] " : "[COMP] ") + `${attacker.name}`, attacker.isPlayer ? 1 : 2);
  const defenderNameStr = toColor((defender.isPlayer ? "[YOU] " : "[COMP] ") + `${defender.name}`, defender.isPlayer ? 1 : 2);

  const firstPlayerHpStr = isOdd
    ? attackerNameStr + toColor(` HP: ${attacker.hp}/${attacker.maxHp} `)
    : defenderNameStr + toColor(` HP: ${defender.hp}/${defender.maxHp} `);
  const secondPlayerHpStr = isOdd
    ? defenderNameStr + toColor(` HP: ${defender.hp}/${defender.maxHp} `)
    : attackerNameStr + toColor(` HP: ${attacker.hp}/${attacker.maxHp} `);

  console.log(`${firstPlayerHpStr} | ${secondPlayerHpStr}\n`);

  return { attackerNameStr, defenderNameStr };
}

const promptAction = async () => {
  prompt.start();
  const response = await prompt.get({ name: "continue", description: "Select action" });
  const action = response.continue;
  if (!["1", "2", "3"].includes(action)) {
    return promptAction();
  }
  return action;
}

const battleTurn = async (firstPlayer, secondPlayer, isOdd = false, i = 1) => {
  const attacker = isOdd ? secondPlayer : firstPlayer;
  const defender = isOdd ? firstPlayer : secondPlayer;
  const { attackerNameStr, defenderNameStr } = showHp(attacker, defender, isOdd);
  if (!isOdd) { toColorLog(`[Round ${i}]\n`); }
  toColorLog(attackerNameStr + toColor(`'s turn!`));

  const delayTime = 1000;

  let action;
  const { name: skillName, damage: skillDamage } = attacker.skill();
  if (attacker.isPlayer) {
    toColorLog(`1. Basic Attack\n2. ${skillName}\n3. Surrender\n`)    
    action = await promptAction();

  } else {
    await new Promise((resolve) => setTimeout(resolve, delayTime * 3));
    action = Math.floor(Math.random() * 2 + 1).toString();
  }

  switch (action) {
    case "1": ;
      console.log(attackerNameStr + toColor(` used basic attack!`));
      await new Promise((resolve) => setTimeout(resolve, delayTime));
      console.log(defenderNameStr + toColor(` received ${attacker.basicAttack} damage!\n`));
      await new Promise((resolve) => setTimeout(resolve, delayTime));
      defender.hp -= attacker.basicAttack;
      break;
    case "2":
      console.log(attackerNameStr + toColor(` used ${skillName}!`));
      await new Promise((resolve) => setTimeout(resolve, delayTime));
      console.log(defenderNameStr + toColor(` received ${skillDamage} damage!\n`));
      await new Promise((resolve) => setTimeout(resolve, delayTime));
      defender.hp -= skillDamage;
      break;
    case "3":
      attacker.hp = 0;
      break;
    default:
      throw new InvalidOption("Invalid option!");
  }

  if (defender.hp <= 0 || attacker.hp <= 0) {
    showHp(attacker, defender, isOdd);
    await new Promise((resolve) => setTimeout(resolve, delayTime));
    return null;
  }
  return battleTurn(firstPlayer, secondPlayer, !isOdd, i + +isOdd);
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
