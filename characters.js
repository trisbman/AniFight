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
class Eagle {
  constructor() {
    this.name = "Eagle";
    this.strength = Math.pow(Math.floor(Math.random() * 10), 2);
  }
}
class Elephant {
  constructor() {
    this.name = "Elephant";
    this.strength = Math.ceil(Math.random() * 50) * 2;
  }
}
const characters = ["Tiger", "Wolf", "Lion", "Eagle", "Elephant"];

module.exports = { Lion, Wolf, Tiger, Eagle, Elephant, characters };
