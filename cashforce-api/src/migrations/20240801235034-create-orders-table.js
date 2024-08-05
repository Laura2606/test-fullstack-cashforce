'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
      },
      orderFileName: {
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buyers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('offers', 'offers_ibfk_1');
    await queryInterface.dropTable('orders');
  }
};

