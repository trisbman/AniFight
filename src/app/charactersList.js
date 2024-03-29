const { characters } = require("./characters/character");
const { toColorLog } = require("./toColor");

const tab = (str) => {
  if (str.length < 5) return "\t\t";
  return "\t";
};

// @param opt: client option to choose list style,
// 0 to tabbed-list view (default), 1 to no-tabbed-list view
const charactersList = (opt) => {
  if (opt) {
    let i = 0;
    characters.map((e) => console.log(`${++i}. ${e}`));
    console.log("0. Random\n");
    return;
  }
  for (let i = 0; i < characters.length; i++) {
    toColorLog(
      parseInt(i, 10) +
        1 +
        ". " +
        characters[i] +
        tab(characters[i]) +
        (characters[++i]
          ? parseInt(i, 10) + 1 + ". " + characters[i]
          : "0. Random")
    );
  }
};

module.exports = charactersList;
