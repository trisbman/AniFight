const { Character } = require('./character');

class Wolf extends Character {
  constructor() {
    super();
    this.name = 'Wolf';
  }
}

module.exports = Wolf;
