const { Character } = require('./character');

class Eagle extends Character {
  constructor() {
    super();
    this.name = 'Eagle';
    this.speed = 100;
    this.attack = 10;
    this.basicAttack = this.attack;

    this.skill = {
      name: 'Eagle Claw',
      damage: 20 + this.attack
    }
  }
}

module.exports = Eagle;
