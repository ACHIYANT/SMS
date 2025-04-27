const express = require("express");
const VendorController = require("../../controllers/vendor-controller");

const router = express.Router();

router.post("/vendor", VendorController.create);
router.delete("/vendor/:id",VendorController.destroy);
router.get("/vendor/:id", VendorController.get);
router.patch("/vendor/:id", VendorController.update);
module.exports = router;
