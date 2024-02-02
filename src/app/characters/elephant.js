const { Character } = require('./character');

class Elephant extends Character {
  constructor() {
    super();
    this.name = 'Elephant';
  }
}

module.exports = Elephant;
