'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GL_ACCNT_MASTER', {
      ACCNT_NO: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10),
        comment: '科目代號'
      },
      ACCNT_KIND: {
        type: Sequelize.STRING(1),
        allowNull: true,
        comment: '科目類別@1.資產 2.負債 3.股東權益 4.營業收入 5.營業成本 6.營業費用 7.營業外收入及支出 8.其他'
      },
      ACCNT_NAME: {
        type: Sequelize.STRING(30),
        allowNull: true,
        comment: '科目名稱'
      },
      ACCNT_DESC: {
        type: Sequelize.STRING(60),
        allowNull: true,
        comment: '摘要'
      },
      BUDGET_CODE: {
        type: Sequelize.STRING(1),
        allowNull: true,
        comment: '預算科目@Y/N'
      },
      CREATE_OFFSET_CODE: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '立沖科目@Y/N'
      },
      ASSEST_ACCNT_NO: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '資產科目@Y/N'
      },
      SPREAD_ACCNT_NO: {
        type: Sequelize.STRING(1),
        allowNull: true,
        comment: '衍生科目@Y/N'
      },
      SUBSYSTEM_NO: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '子系統代號'
      },
      LAST_UPDATE_DATE: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '最近維護日'
      },
      ACCNT_D_C: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '借/貸@D:借方 C:貸方'
      },
      STD_ACCNT_NO: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '證期局科目代號'
      },
      STD_ACCNT_DESC: {
        type: Sequelize.STRING(50),
        allowNull: true,
        comment: '證期局科目名稱'
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
