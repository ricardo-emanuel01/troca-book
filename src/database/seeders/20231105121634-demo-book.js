'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [{
      title: 'Clean Code',
      author: 'Robert Cecil Martin',
      gender: 'literatura técnica',
      userId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down(queryInterface, Sequelize) {


  }
};
