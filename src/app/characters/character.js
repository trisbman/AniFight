class Character {
  constructor(name) {
    this.name = name;
    this.attack = 50;
    this.basicAttack = this.attack;
    this.speed = 50;
    this.maxHp = 250;
    this.hp = this.maxHp;
    this.isPlayer = false;
    this.skill = function () {
      return {
        name: "Skill Attack",
        damage: this.attack,
      };
    }
  }
}

const characters = ["Tiger", "Wolf", "Lion", "Eagle", "Elephant"];

module.exports = { Character, characters };
