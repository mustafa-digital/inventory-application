/* categoryController.js */
const { getCategories } = require("../db/queries");

const categoryController = {
  get: async (req, res) => {
    const categories = await getCategories();
    res.render("category", {
      title: "Generic Clothing Store - Browse by Categories",
      categories: categories,
    });
  },
};

module.exports = categoryController;
