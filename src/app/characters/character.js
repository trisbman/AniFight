class Character {
  constructor(name) {
    this.name = name;
    this.power = 50;
    this.basicAttack = this.power;
    this.hp = 100;
  }
}

const characters = ["Tiger", "Wolf", "Lion", "Eagle", "Elephant"];

module.exports = { Character, characters };
