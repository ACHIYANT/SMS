"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DayBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Vendors, {
        foreignKey: 'vendor_id',
        onDelete: 'CASCADE',
      })
    }
  }
  DayBook.init(
    {
      entry_no: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      entry_type: {
        type: DataTypes.ENUM(
          "Fixed Assets",
          "Consumable Items",
          "Vehicle Items",
          "Stationary Items"
        ),
        allowNull: false,
      },
      bill_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      bill_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Vendors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      total_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      bill_image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      item_image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      approval_level: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fin_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          len: [4, 4],
          min: 2000,
        },
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Rejected', 'Approved'),
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "DayBook",
    }
  );
  return DayBook;
};
