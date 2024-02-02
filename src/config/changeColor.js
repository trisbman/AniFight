const prompt = require("prompt");
const fs = require("fs");
const { toColor, toColorLog } = require("../app/toColor");
const colors = require("./colors");
const InvalidOption = require("../app/errors/invalidOption");

const re = /^[^\d\s]{3,}$/;
const prop = [
  {
    name: "UI Text Color",
    validator: re,
    warning: "Only accepting color name",
  },
  {
    name: "Player Text Color",
    validator: re,
    warning: "Only accepting color name",
  },
  {
    name: "Computer Text Color",
    validator: re,
    warning: "Only accepting color name",
  },
];

const colorHandler = (color) => {
  const arr = [];
  for (const i in color) {
    const colorIteratee = color[i].toLowerCase();
    try {
      if (colors.indexOf(colorIteratee) < 0) {
        throw new InvalidOption("One or some of the colors are not available");
      }
      arr.push(color[i]);
    } catch (err) {
      toColorLog(err.message);
      toColorLog("\nSupported color options:");
      colors.map((e) => toColorLog(e));
      return;
    }
  }

  fs.writeFileSync(
    "./src/config/options.txt",
    `{
  "UIColor": "${arr[0]}",
  "playerColor": "${arr[1]}",
  "compColor": "${arr[2]}"\n}`
  );

  console.log(
    toColor(`Your preferences have been saved!\n
Changes will take effect on the next run.`)
  );
};

const toDefault = () => {
  fs.writeFileSync(
    "./src/config/options.txt",
    `{
    "UIColor": "yellow",
    "playerColor": "green",
    "compColor": "redBright"\n}`
  );
  return toColorLog(`Color setting has been reset to default!\n
Changes will take effect on the next run.`);
};

const changeColor = (def = false) => {
  if (def) return toDefault();
  console.log(toColor("Input only color name"));
  prompt.start();
  return prompt.get(prop).then((v) => colorHandler(v));
};

// const viewColorSetting = () => {};

module.exports = changeColor;
