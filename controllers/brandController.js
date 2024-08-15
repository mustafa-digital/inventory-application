/* brandController.js */
const { getBrands } = require("../db/queries");

const brandController = {
  get: async (req, res) => {
    const brands = await getBrands();
    res.render("brand", {
      title: "Generic Clothing Store - Browse by Brands",
      brands: brands,
    });
  },
};

module.exports = brandController;
