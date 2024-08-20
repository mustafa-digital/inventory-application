/* itemRouter.js */
const itemController = require("../controllers/itemController");

const { Router } = require("express");
const itemRouter = Router();

itemRouter.get("/:itemId", itemController.get);
itemRouter.post("/:itemId/update", itemController.updateItem);
itemRouter.post("/:itemId/delete", itemController.deleteItem);

module.exports = itemRouter;
