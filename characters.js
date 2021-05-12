class Lion {
  constructor() {
    this.name = "Lion";
    this.strength = Math.floor(Math.random() * 50) + 50;
  }

  win() {
    console.log("roarrrrrr");
  }
}
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
class Wolf {
  constructor() {
    this.name = "Wolf";
    this.strength = Math.floor(Math.random() * 50) * 2;
  }

  win() {
    console.log("owooooo!");
  }
}
const characters = ["Tiger", "Wolf", "Lion"];

module.exports = { Lion, Wolf, Tiger, characters };
