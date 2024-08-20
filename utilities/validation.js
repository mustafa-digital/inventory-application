/* validation.js */
const { body } = require("express-validator");

const validateItem = [
  body("itemName")
    .trim()
    .isAlpha("en-US", {
      ignore: " ",
    })
    .withMessage("Item Name must only contain alphanumeric characters.")
    .isLength({ min: 3, max: 25 })
    .withMessage("Item Name must be between 3 to 25 characters."),
];

module.exports = {
  validateItem,
};
