"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("autor_obra", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_autor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "autores",
          },
          key: "id",
        },
      },
      id_obra: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "obras",
          },
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("autor_obra");
  },
};
