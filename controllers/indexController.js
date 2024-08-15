/* indexController.js */

const indexController = {
  get: (req, res) => {
    res.render("index", {
      title: "Generic Clothing Store",
    });
  },
};

module.exports = indexController;
