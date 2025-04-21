const { where } = require("sequelize");
const { User, Role } = require("../models/index");
const ValidationError = require("../utils/validation-error");
const ClientError = require("../utils/client-error");
const { StatusCodes } = require("http-status-codes");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if (error.name == "SequelizeValidationError") { 
        // console.log("Creating new validation error.");
        // let validationError = new ValidationError(error);
        throw new ValidationError(error);
      }
      console.log("Something went wrong on repository layer");
      throw error;
    }
  }
  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong on repository layer");
      throw error;
    }
  }
  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["mobileno", "id"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository layer");
      throw error;
    }
  }

  async getByMobileNo(userMobileNo) {
    try {
      const user = await User.findOne({
        where: {
          mobileno: userMobileNo,
        },
      });
      if (!user) {
        throw new ClientError(
          "AttributeNotFound",
          "Invalid username sent in the request",
          "Please check the email, as there is no record of the username.",
          StatusCodes.NOT_FOUND
        );
      }
      return user;
    } catch (error) {
      console.log("Something went wrong on repository layer");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("Something went wrong on repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
