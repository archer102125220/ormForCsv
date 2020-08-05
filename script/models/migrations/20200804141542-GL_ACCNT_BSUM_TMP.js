'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GL_ACCNT_BSUM_TMP', {
      COMPANY_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(4),
        comment: '公司別'
      },
      UNIT_ID: {
        type: Sequelize.STRING(7),
        allowNull: true,
        primaryKey: true,
        comment: '單位別'
      },
      ACCNT_YEAR: {
        type: Sequelize.STRING(4),
        allowNull: true,
        primaryKey: true,
        comment: '年度'
      },
      ACCNT_KIND: {
        type: Sequelize.STRING(1),
        allowNull: true,
        primaryKey: true,
        comment: '科目類別'
      },
      ACCNT_PERIOD: {
        type: Sequelize.STRING(2),
        allowNull: true,
        primaryKey: true,
        comment: '期間'
      },
      PERIOD_DEBIT: {
        type: Sequelize.DOUBLE(13, 2),
        allowNull: true,
        comment: '借方'
      },
      PERIOD_CREDIT: {
        type: Sequelize.DOUBLE(13, 2),
        allowNull: true,
        comment: '貸方'
      },
      LAST_UPDATE_DATE: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '最近維護日'
      },
      VOU_DEBIT_COUNT: {
        type: Sequelize.INTEGER(6),
        allowNull: true,
        comment: '傳票分錄借方筆數'
      },
      VOU_CREDIT_COUNT: {
        allowNull: false,
        type: Sequelize.INTEGER(6),
        comment: '傳票分錄貸方筆數'
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
