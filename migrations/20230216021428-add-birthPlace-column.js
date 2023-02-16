'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Directors', 'birthPlace', { type: Sequelize.STRING });  
  },
  async down (queryInterface, Sequelize) { 
    await queryInterface.removeColumn('Directors', 'birthPlace') 
  }
};
