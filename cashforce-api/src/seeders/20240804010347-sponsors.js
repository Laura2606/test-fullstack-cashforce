'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sponsors', [
      {
        name: 'Sponsor A',
        tradingName: 'Trading Name A',
        cashforceTax: '12345678000195',
        responsibleName: 'John Doe',
        responsibleEmail: 'john.doe@example.com',
        responsiblePosition: 'Manager',
        responsiblePhone: '123456789',
        responsibleMobile: '987654321',
        website: 'https://www.sponsorA.com',
        postalCode: '12345-678',
        address: '123 Main St',
        number: '100',
        complement: 'Suite 200',
        neighborhood: 'Downtown',
        city: 'Cityville',
        state: 'ST',
        bank: 'Bank A',
        bankAgency: '0001',
        account: '123456',
        phoneNumber: '123456789',
        situation: 'Active',
        situationDate: '2024-08-04',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 1,  // Certifique-se de que esse ID exista na tabela `cnpjs`
        email: 'contact@sponsorA.com',
      },
      {
        name: 'Sponsor B',
        tradingName: 'Trading Name B',
        cashforceTax: '98765432000198',
        responsibleName: 'Jane Smith',
        responsibleEmail: 'jane.smith@example.com',
        responsiblePosition: 'Director',
        responsiblePhone: '987654321',
        responsibleMobile: '123456789',
        website: 'https://www.sponsorB.com',
        postalCode: '87654-321',
        address: '456 Elm St',
        number: '200',
        complement: 'Floor 3',
        neighborhood: 'Uptown',
        city: 'Metropolis',
        state: 'MT',
        bank: 'Bank B',
        bankAgency: '0002',
        account: '654321',
        phoneNumber: '987654321',
        situation: 'Inactive',
        situationDate: '2024-08-04',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 2,
        email: 'contact@sponsorB.com',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sponsors', null, {});
  },
};
