function calculateBalance(term, arr) {
  let data = arr.filter((input) => input.category === term);
  return data.reduce((a, b) => a + b.price, 0);
}

module.exports = {
  calculateBalance,
};
