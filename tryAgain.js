const prompt = require("prompt");
const main = require("./main"); //log to console 1x if there's main()
const prop = {
  name: "tryAgain",
};

const ask = (val) => {
  if (val) return main();
  return new Promise((resolve) => {
    console.log("Try Again? (Y/n)");
    prompt.start();
    return prompt.get(prop);
  });
};

const confirm = (prop) => {
  console.log("//confirm block triggered");
  if (/^y$/i.test(prop.tryAgain)) console.log("exe");
  //return main();
  else return console.log("\nThank you for playing this game!");
};

const tryAgain = (val) => ask(val).then((e) => confirm(e));

//tryAgain(1);

module.exports = tryAgain;
