// ! Repository folder is to have the interactions with the model and database.
import { Vendors } from "../models/index";

class VendorRepository {
  async createVendor({ name, address, gst_no, mobile_no }) {
    try {
      const vendor = await Vendors.create({ name, address, gst_no, mobile_no });
      return vendor;
    } catch (error) {
      throw { error };
    }
  }

  async deleteVendor({ vendor_id }) {
    try {
      await Vendors.destroy({
        where: {
          id: vendor_id,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = VendorRepository;