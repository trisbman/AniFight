class Character {
  constructor(name) {
    this.name = name;
    this.attack = 50;
    this.basicAttack = this.attack;
    this.speed = 50;
    this.hp = 100;
    this.isPlayer = false;
    this.skill = {
      name: "Skill",
      damage: this.basicAttack + 10,
    }
  }
}

const characters = ["Tiger", "Wolf", "Lion", "Eagle", "Elephant"];

module.exports = { Character, characters };
