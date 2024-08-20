/* createRouter.js */
const createController = require("../controllers/createController");

const { Router } = require("express");
const createRouter = Router();

createRouter.get("/", createController.get);
createRouter.post("/", createController.post);

module.exports = createRouter;
