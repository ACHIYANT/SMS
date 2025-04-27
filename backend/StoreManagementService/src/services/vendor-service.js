// import { VendorRepository } from "../repository/index";
const { VendorRepository } = require("../repository/index");

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
      const response = await this.vendorRepository.deleteVendor(vendorId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async updateVendor(vendorId, data) {
    try {
      const vendor = await this.vendorRepository.updateVendor(vendorId, data);

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

  async getAllVendors() {
    try {
      const vendors = await this.vendorRepository.getAllVendors();
      return vendors;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async searchVendorByName(name) {
    try {
      const vendors = await this.vendorRepository.searchVendorByName(name);
      return vendors;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }
}

module.exports = VendorService;
