/* itemController.js */
const { deleteItem } = require("../db/queries");

const itemController = {
  get: async (req, res) => {
    const itemId = req.params.itemId;
  },
  deleteItem: async (req, res) => {
    const itemId = req.params.itemId;
    await deleteItem(itemId);
    res.redirect("/");
  },
};

module.exports = itemController;
