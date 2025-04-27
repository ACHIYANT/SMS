// ! Repository folder is to have the interactions with the model and database.
// import { where } from "sequelize";
// import { Vendor } from "../models/index";

const { Employee } = require("../models/index");
const { Op } = require("sequelize");
class EmployeeRepository {
  async createEmployee(data) {
    try {
      console.log(
        "Trying to create Employee in the try block of repository layer."
      );
      const employee = await Employee.create(data);
      return employee;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async deleteEmployee(empId) {
    try {
      await Employee.destroy({
        where: {
          emp_id: empId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async updateEmployee(empId, data) {
    try {
      const [updatedRowsCount] = await Employee.update(data, {
        where: {
          emp_id: empId,
        },
      });

      if (updatedRowsCount === 0) {
        // No vendor found with the given id
        throw new Error("Employee not found or no changes made");
      }

      const updatedEmployee = await Employee.findByPk(empId);
      return updatedEmployee;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async getEmployee(empId) {
    try {
      //   const vendor = await Vendor.findByPk(vendorId);
      const employee = await Employee.findByPk(empId);
      return employee;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async getAllEmployees() {
    try {
      const employees = await Employee.findAll();
      return employees;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async searchEmployeeByName(name) {
    try {
      const employees = await Employee.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`, // Partial match
          },
        },
      });
      return employees;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }
}

module.exports = EmployeeRepository;
