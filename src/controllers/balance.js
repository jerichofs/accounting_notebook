let data = require("../data");

const getBalance = (req, res) => {
  return res.status(200).json({
    balance: data.accountValue
  });
};

module.exports = {
  getBalance
};
