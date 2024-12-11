const { Router } = require("express");

const ContactController = require("./Domain/Contacts/ContactController");
const CategoryController = require("./Domain/Categories/CategoryController");

const router = Router();

router.get("/contacts", ContactController.indexListAll);
router.get("/contacts/:id", ContactController.showListOne);
router.post("/contacts", ContactController.storeCreate);
router.put("/contacts/:id", ContactController.update);
router.delete("/contacts/:id", ContactController.delete);

router.get("/categories", CategoryController.indexListAll);
router.get("/categories/:id", CategoryController.showListOne);
router.post("/categories", CategoryController.storeCreate);

module.exports = router;