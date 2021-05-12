class Wolf {
  constructor() {
    this.name = "Wolf";
    this.strength = Math.floor(Math.random() * 50) * 2;
  }

  win() {
    console.log("owooooo!");
  }
}

// TODO 2
module.exports = Wolf;
