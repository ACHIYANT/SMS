const { VendorService } = require("../services/index");

const vendorService = new VendorService();

const create = async (req, res) => {
  console.log("I m inside create function");
  try {
    console.log("I am inside try of create fucntion in controller");
    const vendor = await vendorService.createVendor(req.body);
    return res.status(201).json({
      data: vendor,
      success: true,
      message: "Successfully added a vendor",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a vendor",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await vendorService.deleteVendor(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted a vendor",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete vendor",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await vendorService.getVendor(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched a vendor",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch vendor",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await vendorService.updateVendor(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated a vendor",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a vendor",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await vendorService.getAllVendors();
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated a vendor",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all vendors",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
