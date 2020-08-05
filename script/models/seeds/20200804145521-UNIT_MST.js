'use strict';
//import CSV from './../../lib/SQL_creater';
const CSV = require('./../../lib/SQL_creater');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await CSV('script/CSVfile/單位主檔(Data)');
    return queryInterface.bulkInsert('UNIT_MST', data);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
