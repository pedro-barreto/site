"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("autores", {
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
      sobre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profissao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.BLOB('long'),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("autores");
  },
};
