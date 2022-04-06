'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bird', {
      idBird: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scienceName: {
        type: Sequelize.STRING
      },
      vietnameseName: {
        type: Sequelize.STRING
      },
      namePlate: {
        type: Sequelize.STRING
      },
      kingdom: {
        type: Sequelize.STRING
      },
      phylum: {
        type: Sequelize.STRING
      },
      classBird: {
        type: Sequelize.STRING
      },
      orderBird: {
        type: Sequelize.STRING
      },
      family: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      morphological: {
        type: Sequelize.STRING
      },
      ecological: {
        type: Sequelize.STRING
      },
      useValue: {
        type: Sequelize.STRING
      },
      vietnameseStatus: {
        type: Sequelize.STRING
      },
      distribution: {
        type: Sequelize.STRING
      },
      coordinates: {
        type: Sequelize.STRING
      },
      habitat: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bird');
  }
};