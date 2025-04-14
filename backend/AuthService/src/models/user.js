"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
const { SALT } = require("../config/serverConfig");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 20],
          is: {
            args: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            msg: "Only letters and single spaces are allowed. No leading/trailing/multiple spaces.",
          },
        },
      },
      mobileno: {
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
        isNumeric: true,
        notEmpty: true,
        len: [10, 10],
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      division: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });
  return User;
};
