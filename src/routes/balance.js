const express = require("express");
const balance = express.Router();

const { getBalance } = require("../controllers/balance");

// Fetch current account balance
balance.get("/", getBalance);

// handle 404 error
balance.use((req, res) => {
  res.status(404).json({
    status: 404,
    msg: "Not Found."
  });
});

module.exports = balance;
