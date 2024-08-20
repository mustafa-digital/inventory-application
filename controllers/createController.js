/* createController.js */
const { getCategories, getBrands, insertItem } = require("../db/queries");
const { body, validationResult } = require("express-validator");

const validateItem = [
  body("itemName")
    .trim()
    .isAlpha()
    .withMessage("Item Name must only contain alphanumeric characters.")
    .isLength({ min: 3, max: 25 })
    .withMessage("Item Name must be between 3 to 25 characters."),
  body("inventory"),
];

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
      const errors = validationResult(req);
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
