'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cnpjs', [
      {
        id: 1,
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: new Date('2020-10-29 21:20:33'),
        updatedAt: new Date('2020-10-29 21:20:33')
      },
      {
        id: 2,
        cnpj: '00000000000002',
        companyType: '1',
        createdAt: new Date('2020-10-29 21:20:33'),
        updatedAt: new Date('2020-10-29 21:20:33')
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};
