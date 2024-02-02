class UnknownError extends Error {
  constructor(err) {
    super(err);
    console.log(`
    The battle is invalid!\n
    Please contact developer for more information!\n
    ${err}`)
  }
}

module.exports = UnknownError;
