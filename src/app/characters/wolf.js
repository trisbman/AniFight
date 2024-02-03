const { Character } = require('./character');

class Wolf extends Character {
  constructor() {
    super();
    this.name = 'Wolf';
    this.attack += 10;
    this.basicAttack = this.attack;
    this.maxHp -= 10;
    this.hp = this.maxHp;
    this.speed += 20;
    this.skill = function () {
      return {
        name: 'Wolf Bite',
        damage: Math.round((1 + this.attack) * Math.random()),
      }
    }
  }
}

module.exports = Wolf;
