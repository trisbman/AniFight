const { Character } = require('./character');

class Tiger extends Character {
  constructor() {
    super();
    this.name = 'Tiger';
    this.attack += 20;
    this.basicAttack = this.attack;
    this.speed += 20;
    this.maxHp -= 20;
    this.hp = this.maxHp;
    this.skill = function () {
      return {
        name: 'Tiger Claw',
        damage: Math.round((1 + this.attack) * Math.random()) * 2,
      }
    }
  }
}

module.exports = Tiger;
