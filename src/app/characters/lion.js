const { Character } = require('./character');

class Lion extends Character {
  constructor() {
    super();
    this.name = 'Lion';
  }
}

module.exports = Lion;
