const uuidv4 = require("uuid/v4");
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

const addTransaction = (req, res) => {
  console.log("body ", req.body);
  const { type, amount } = req.body;
  let transaction;

  if (type === "credit") {
    data.accountValue += +amount;

    transaction = {
      id: uuidv4(),
      type,
      amount: data.accountValue,
      effectiveDate: new Date()
    };

    data.transactions.push(transaction);
  }

  if (type === "debit") {
    if (data.accountValue - +amount < 0) {
      return res.status(403).json("Account does not have enough money");
    }

    data.accountValue -= +amount;

    transaction = {
      id: uuidv4(),
      type,
      amount: data.accountValue,
      effectiveDate: new Date()
    };

    data.transactions.push(transaction);
  }

  return res.status(200).json(transaction);
};

module.exports = {
  getTransactions,
  getTransactionById,
  addTransaction
};
