/* brandController.js */
const { getBrands, getBrandItems } = require("../db/queries");

const brandController = {
  get: async (req, res) => {
    const brands = await getBrands();
    res.render("brand", {
      title: "Generic Clothing Store - Browse by Brands",
      brands: brands,
    });
  },

  getSingleBrandItems: async (req, res) => {
    const brandName = req.params.brandName
      .split("_")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");

    const items = await getBrandItems(brandName);
    res.render("browse", {
      title: `Generic Clothing Store - Clothes by ${brandName}`,
      items: items,
    });
  },
};

module.exports = brandController;
