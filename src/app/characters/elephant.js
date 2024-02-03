const { Character } = require('./character');

class Elephant extends Character {
  constructor() {
    super();
    this.name = 'Elephant';
    this.maxHp += 50;
    this.hp = this.maxHp;
    this.attack -= 10;
    this.basicAttack = this.attack;
    this.speed -= 10;

    this.skill = function (){
      return {
        name: 'Elephant Stomp',
        damage: 30 + this.attack * 0.5,
      }
    }
  }
}

module.exports = Elephant;
