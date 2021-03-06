const { toColor } = require("./toColor");

const countdown = (value) =>
  new Promise((resolve) => {
    console.log(
      toColor(
        `Battle between ${toColor(value[0], 1)} and ${toColor(value[1], 2)}`
      )
    );
    let j = 0;
    for (let i = 1; i < 4; i++) {
      setTimeout(() => {
        console.log(toColor(`\t... ${parseInt(4 - i, 10)}...`));
        if (i === 3) console.log(toColor("\t  BEGIN\n"));
      }, i * 1000);
      j = i;
    }
    setTimeout(() => {
      resolve(value);
    }, (j + 1) * 1000);
  });

module.exports = countdown;
