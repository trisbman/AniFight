class Tiger {
  constructor() {
    this.name = "Tiger";
    this.strength =
      Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50);
  }

  win() {
    console.log("grrrrr!");
  }
}

// TODO 1
module.exports = Tiger;
