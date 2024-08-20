/* createController.js */
const { getCategories, getBrands, insertItem } = require("../db/queries");

const createController = {
  get: async (req, res) => {
    const [categories, brands] = await Promise.all([
      getCategories(),
      getBrands(),
    ]);
    res.render("create", {
      title: "Add New Item",
      categories: categories,
      brands: brands,
    });
  },
  post: async (req, res) => {
    const { itemName, category, brand, inventory } = req.body;
    insertItem({ itemName, category, brand, inventory });
    res.redirect("/");
  },
};

module.exports = createController;
