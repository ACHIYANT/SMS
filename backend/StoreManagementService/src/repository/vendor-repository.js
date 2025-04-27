// ! Repository folder is to have the interactions with the model and database.
// import { where } from "sequelize";
// import { Vendor } from "../models/index";

const { Vendors } = require("../models/index");

class VendorRepository {
  async createVendor(data) {
    try {
      console.log(
        "Trying to create vendor in the try block of repository layer."
      );
      const vendor = await Vendors.create(data);
      return vendor;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async deleteVendor(vendorId) {
    try {
      await Vendors.destroy({
        where: {
          id: vendorId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async updateVendor(vendorId, data) {
    try {
      const [updatedRowsCount] = await Vendors.update(data, {
        where: {
          id: vendorId,
        },
      });

      if (updatedRowsCount === 0) {
        // No vendor found with the given id
        throw new Error("Vendor not found or no changes made");
      }

      const updatedVendor = await Vendors.findByPk(vendorId);
      console.log("Repo Layer : ", updatedVendor);
      return updatedVendor;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async getVendor(gstNumber) {
    try {
      //   const vendor = await Vendor.findByPk(vendorId);
      const vendor = await Vendors.findOne({
        where: {
          gst_no: gstNumber, // 'gst' should match the column name in your model
        },
      });
      return vendor;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }
}

module.exports = VendorRepository;
