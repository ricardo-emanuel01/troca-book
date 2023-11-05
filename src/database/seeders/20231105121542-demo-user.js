'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      fullName: 'Jane Doe',
      email: 'jane@email.com',
      password: '1234',
      city: 'San Francisco',
      state: 'CA',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down(queryInterface, Sequelize) {


  }
};
