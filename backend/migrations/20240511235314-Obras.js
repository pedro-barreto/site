"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("obras", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sinopse: {
        type: Sequelize.STRING(535),
        allowNull: false,
      },
      duracao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      avaliacao: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.BLOB("long"),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("obras");
  },
};
