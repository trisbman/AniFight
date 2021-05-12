const countdown = (pair) =>
  new Promise((resolve, reject) => {
    console.log("Get ready to fight in...");
    let j = 0;
    for (let i = 1; i < 4; i++) {
      setTimeout(() => {
        console.log(4 - i + "...");
        if (i === 3) console.log("BEGIN!\n");
      }, i * 1000);
      j = i;
    }
    setTimeout(() => {
      resolve(pair);
    }, (j + 1) * 1000);
  });

module.exports = countdown;
