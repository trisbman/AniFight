const { Character } = require('./character');

class Lion extends Character {
  constructor() {
    super();
    this.name = 'Lion';
    this.attack += 10;
    this.basicAttack = this.attack;
    this.speed += 10;
    this.skill = function () {
      return {
        name: 'Lion Bite',
        damage: Math.round((1 + this.attack) * Math.random()),
      }
    }
  }
}

module.exports = Lion;
