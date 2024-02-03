const { Character } = require('./character');

class Eagle extends Character {
  constructor() {
    super();
    this.name = 'Eagle';
    this.speed *= 2;
    this.attack -= 25;
    this.basicAttack = this.attack;
    this.maxHp -= 30;
    this.hp = this.maxHp;

    this.skill = function () {
      return {
        name: 'Eagle Claw',
        damage: Math.round(Math.random() * this.attack),
      }
    }
  }
}

module.exports = Eagle;
