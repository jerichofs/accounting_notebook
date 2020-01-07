const express = require("express");
const transactions = express.Router();
const bodyParser = require("body-parser");

const {
  getTransactions,
  getTransactionById,
  addTransaction
} = require("../controllers/transactions");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Fetch transactions history
transactions.get("/", getTransactions);

// Find transaction by ID
transactions.get("/:transactionId", getTransactionById);

// Add new transaction
transactions.post("/", urlencodedParser, addTransaction);

// handle 404 error
transactions.use((req, res) => {
  res.status(404).json({
    status: 404,
    msg: "Not Found."
  });
});

module.exports = transactions;
