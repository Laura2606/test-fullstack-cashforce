'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Order',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sponsor',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
