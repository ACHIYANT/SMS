// ! Repository folder is to have the interactions with the model and database.
import { where } from "sequelize";
import { Vendor } from "../models/index";

class VendorRepository {
  async createVendor(data) {
    try {
      const vendor = await Vendor.create(data);
      return vendor;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async deleteVendor(vendorId) {
    try {
      await Vendor.destroy({
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
      const vendor = await Vendor.update(data, {
        where: {
          vendor_id: vendorId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async getVendor(gstNumber) {
    try {
      //   const vendor = await Vendor.findByPk(vendorId);
      const vendor = await Vendor.findOne({
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
