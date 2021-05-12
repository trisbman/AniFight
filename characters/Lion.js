class Lion {
  constructor() {
    this.name = "Lion";
    this.strength = Math.floor(Math.random() * 50) + 50;
  }

  win() {
    console.log("roarrrrrr");
  }
}

// TODO 1
module.exports = Lion;
