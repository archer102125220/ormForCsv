'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GL_COMPANY_FILE', {
      COMPANY_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(4),
        comment: '公司別'
      },
      COMPANY_SHORT_NAME: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '公司簡稱'
      },
      COMPANY_NAME: {
        type: Sequelize.STRING(60),
        allowNull: true,
        comment: '公司名稱'
      },
      LAST_MONTH_CLOSE: {
        type: Sequelize.STRING(6),
        allowNull: true,
        comment: '前次月結'
      },
      LAST_UPDATE_DATE: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '最近維護日'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
