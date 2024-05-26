"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("personagem_obra", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_personagem: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "personagens",
          },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      id_obra: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "obras",
          },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("users");
  },
};
