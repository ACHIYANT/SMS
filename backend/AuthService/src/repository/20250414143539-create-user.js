"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [3, 20],
        },
      },
      mobileno: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false,
        isNumeric: true,
        notEmpty: true,
        len: [10, 10],
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      division: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
