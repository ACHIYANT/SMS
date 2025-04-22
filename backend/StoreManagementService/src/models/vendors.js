"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendors.init(
    {
      name: {
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
      address: {
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
      gst_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [14, 14],
          is: {
            args: /^[A-Z0-9]+$/,
            msg: "Only Capital letters and digits are allowed and only 14 digits.",
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
      modelName: "Vendors",
    }
  );
  return Vendors;
};
