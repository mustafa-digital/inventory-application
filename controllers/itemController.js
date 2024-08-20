/* itemController.js */
const {
  deleteItem,
  getItemFromID,
  getCategories,
  getBrands,
  updateItem,
} = require("../db/queries");
const { validationResult } = require("express-validator");
const { validateItem } = require("../utilities/validation");

const itemController = {
  get: async (req, res) => {
    const [item, categories, brands] = await Promise.all([
      getItemFromID(req.params.itemId),
      getCategories(),
      getBrands(),
    ]);
    console.log({ item });
    console.log({ categories });
    res.render("update", {
      title: "Update Item",
      item: item[0],
      categories: categories,
      brands: brands,
    });
  },
  deleteItem: async (req, res) => {
    const itemId = req.params.itemId;
    await deleteItem(itemId);

    res.redirect(req.headers.referer);
  },
  updateItem: [
    validateItem,
    async (req, res) => {
      // get validation errors, if there are any
      const errors = validationResult(req);
      // if errors, re-render the create form with error messages
      if (!errors.isEmpty()) {
        const [categories, brands] = await Promise.all([
          getItemFromID(req.params.itemId),
          getCategories(),
          getBrands(),
        ]);
        return res.status(400).render("update", {
          title: "Update Item",
          item: item,
          categories: categories,
          brands: brands,
          errors: errors.array(),
        });
      }

      const { itemName, category, brand, inventory } = req.body;
      const itemId = req.params.itemId;
      console.log({ itemId });
      console.log({ itemName });
      updateItem({ itemName, category, brand, inventory, itemId });
      res.redirect("/");
    },
  ],
};

module.exports = itemController;
