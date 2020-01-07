const express = require("express");
const transactions = express.Router();

const { getTransactions } = require("../controllers/transactions");

// Fetch transactions history
transactions.get("/", getTransactions);

// handle 404 error
transactions.use((req, res) => {
  res.status(404).json({
    status: 404,
    msg: "Not Found."
  });
});

module.exports = transactions;
