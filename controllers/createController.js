/* createController.js */
const { getCategories, getBrands, insertItem } = require("../db/queries");
const { validationResult } = require("express-validator");
const { validateItem } = require("../utilities/validation");

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
  post: [
    validateItem,
    async (req, res) => {
      // get validation errors, if there are any
      const errors = validationResult(req);
      // if errors, re-render the create form with error messages
      if (!errors.isEmpty()) {
        const [categories, brands] = await Promise.all([
          getCategories(),
          getBrands(),
        ]);
        return res.status(400).render("create", {
          title: "Add New Item",
          categories: categories,
          brands: brands,
          errors: errors.array(),
        });
      }

      const { itemName, category, brand, inventory } = req.body;
      insertItem({ itemName, category, brand, inventory });
      res.redirect("/");
    },
  ],
};

module.exports = createController;
