let data = require("../data");

const getTransactions = (req, res) => {
  return res.status(200).json({
    transactions: data.transactions
  });
};

const getTransactionById = (req, res) => {
  const { transactionId } = req.params;

  const transaction = data.transactions.find(
    element => element.id === transactionId
  );

  if (!transaction) {
    return res.status(404).json("transaction not found");
  }

  return res.status(200).json(transaction);
};

module.exports = {
  getTransactions,
  getTransactionById
};
