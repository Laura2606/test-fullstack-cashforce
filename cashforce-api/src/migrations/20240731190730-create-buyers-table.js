'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tradingName: Sequelize.STRING,
      cashforceTax: Sequelize.STRING,
      responsibleName: Sequelize.STRING,
      responsibleEmail: Sequelize.STRING,
      responsiblePosition: Sequelize.STRING,
      responsiblePhone: Sequelize.STRING,
      responsibleMobile: Sequelize.STRING,
      website: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      address: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      situation: Sequelize.STRING,
      situationDate: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
      confirm: Sequelize.BOOLEAN,
      email: Sequelize.STRING,

    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
