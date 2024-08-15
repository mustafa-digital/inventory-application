/* brandRouter.js */
const brandController = require("../controllers/brandController");

const { Router } = require("express");
const brandRouter = Router();

brandRouter.get("/", brandController.get);

module.exports = brandRouter;
