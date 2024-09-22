const { Router } = require("express");

const ContactController = require("./controllers/ContactController");

const router = Router();

router.get("/contacts", ContactController.indexListAll);
router.get("/contacts/:id", ContactController.showListOne);

router.post("/contacts", ContactController.storeCreate);

router.put("/contacts/:id", ContactController.update);

router.delete("/contacts/:id", ContactController.delete);

module.exports = router;