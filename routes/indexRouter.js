/* indexRouter.js */
const indexController = require("../controllers/indexController");

const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", indexController.get);

module.exports = indexRouter;
