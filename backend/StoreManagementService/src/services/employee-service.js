// import { VendorRepository } from "../repository/index";
const { EmployeeRepository } = require("../repository/index");

class EmployeeService {
  constructor() {
    this.employeeRepository = new EmployeeRepository();
  }

  async createEmployee(data) {
    try {
      const employee = await this.employeeRepository.createEmployee(data);
      return employee;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async deleteEmployee(empId) {
    try {
      const response = await this.employeeRepository.deleteEmployee(empId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async updateEmployee(empId, data) {
    try {
      const employee = await this.employeeRepository.updateEmployee(
        empId,
        data
      );

      return employee;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async getEmployee(empId) {
    try {
      const employee = await this.employeeRepository.getEmployee(empId);
      return employee;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async getAllEmployees() {
    try {
      const employees = await this.employeeRepository.getAllEmployees();
      return employees;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async searchEmployeeByName(name) {
    try {
      const employees = await this.employeeRepository.searchEmployeeByName(
        name
      );
      return employees;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }
}

module.exports = EmployeeService;
