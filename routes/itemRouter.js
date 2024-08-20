/* itemRouter.js */
const itemController = require("../controllers/itemController");

const { Router } = require("express");
const itemRouter = Router();

itemRouter.get("/", itemController.get);

module.exports = itemRouter;
