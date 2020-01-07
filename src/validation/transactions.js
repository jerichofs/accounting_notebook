const Joi = require("@hapi/joi");

const getTransactionByIdSchema = Joi.object({
  transactionId: Joi.string().guid({ version: ["uuidv4"] })
});

const addTransactionSchema = Joi.object({
  type: Joi.string()
    .valid("credit", "debit")
    .required(),
  amount: Joi.number()
    .positive()
    .required()
});

module.exports = {
  getTransactionByIdSchema,
  addTransactionSchema
};
