function calculateBalance(term, arr) {
  let data = arr.filter((input) => input.category === term);

  let costenSummary = data.reduce((a, b) => a + b.price, 0);

  let showCosten = data.map((el) => {
    return {
      description: el.description,
      price: el.price,
    };
  });

  return { costenSummary, showCosten };
}

module.exports = {
  calculateBalance,
};
