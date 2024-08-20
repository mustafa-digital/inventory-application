/* brandRouter.js */
const brandController = require("../controllers/brandController");

const { Router } = require("express");
const brandRouter = Router();

brandRouter.get("/", brandController.get);
brandRouter.get("/:brandName", brandController.getSingleBrandItems);

module.exports = brandRouter;
