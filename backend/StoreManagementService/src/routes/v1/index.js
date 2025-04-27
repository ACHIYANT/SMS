const express = require("express");
const VendorController = require("../../controllers/vendor-controller");
const EmployeeController = require("../../controllers/employee-controller");
const router = express.Router();

router.post("/vendor", VendorController.create);
router.delete("/vendor/:id", VendorController.destroy);
router.get("/vendor/search", VendorController.searchVendorByName);
router.get("/vendor/:id", VendorController.get);
router.patch("/vendor/:id", VendorController.update);
router.get("/vendor", VendorController.getAll);

router.post("/employee", EmployeeController.create);
router.delete("/employee/:id", EmployeeController.destroy);
router.get("/employee/search", EmployeeController.searchEmployeeByName);
router.get("/employee/:id", EmployeeController.get);
router.patch("/employee/:id", EmployeeController.update);
router.get("/employee", EmployeeController.getAll);

module.exports = router;
