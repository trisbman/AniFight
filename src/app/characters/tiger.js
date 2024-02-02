const { Character } = require('./character');

class Tiger extends Character {
  constructor() {
    super();
    this.name = 'Tiger';
  }
}

module.exports = Tiger;
