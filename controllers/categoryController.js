/* categoryController.js */
const { getCategories, getCategoryItems } = require("../db/queries");

const categoryController = {
  get: async (req, res) => {
    const categories = await getCategories();
    res.render("category", {
      title: "Generic Clothing Store - Browse by Categories",
      categories: categories,
    });
  },

  getSingleCategoryItems: async (req, res) => {
    const categoryName = req.params.categoryName
      .split("_")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
    const items = await getCategoryItems(categoryName);
    console.log(items);
    res.render("browse", {
      title: `Generic Clothing Store - ${categoryName}`,
      items: items,
    });
  },
};

module.exports = categoryController;
