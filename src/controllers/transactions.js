let data = require("../data");

const getTransactions = (req, res) => {
  return res.status(200).json({
    transactions: data.transactions
  });
};

module.exports = {
  getTransactions
};
