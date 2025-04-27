"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      emp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      father_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      father_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      email_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
          isEmail: true,
          is: {
            args: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            msg: "Please enter valid email address.",
          },
        },
      },
      designation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      division: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 50],
          // is: {
          //   args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
          //   msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          // },
        },
      },
      group_head: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 20],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      office_location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 20],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      mobile_no: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isNumeric: true,
          len: [10, 10], // Exactly 10 digits
          is: {
            args: /^[6-9]\d{9}$/, // Optional: Only Indian-style mobile numbers
            msg: "Mobile number must be 10 digits and start with 6-9",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
