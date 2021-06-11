class Character {
  constructor(name) {
    this.name = name;
    this.strength = Math.floor(Math.random() * 50) + 50;
  }
}

const Lion = new Character("Lion");

const Tiger = new Character("Tiger");

const Wolf = new Character("Wolf");

const Eagle = new Character("Eagle");

const Elephant = new Character("Elephant");

const characters = ["Tiger", "Wolf", "Lion", "Eagle", "Elephant"];

module.exports = { Lion, Wolf, Tiger, Eagle, Elephant, characters };
