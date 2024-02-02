const { Character } = require('./character');

class Eagle extends Character {
  constructor() {
    super();
    this.name = 'Eagle';
  }
}

module.exports = Eagle;
