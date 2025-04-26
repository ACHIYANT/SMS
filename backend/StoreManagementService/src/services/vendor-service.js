import { VendorRepository } from "../repository/index";

class VendorService {
  constructor() {
    this.vendorRepository = new VendorRepository();
  }

  async createVendor(data) {
    try {
      const vendor = await this.vendorRepository.createVendor(data);
      return vendor;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async deleteVendor(vendorId) {
    try {
      const response = this.vendorRepository.deleteVendor(vendorId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async updateVendor(vendor_id, data) {
    try {
      const vendor = await this.vendorRepository.updateVendor(vendor_id, data);
      return vendor;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async getVendor(gstNumber) {
    try {
      const vendor = await this.vendorRepository.getVendor(gstNumber);
      return vendor;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }
}
