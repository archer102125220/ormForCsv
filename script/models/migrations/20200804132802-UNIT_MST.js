'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UNIT_MST', {
      UNIT_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(6),
        comment: '單位別'
      },
      UNIT_NAME: {
        type: Sequelize.STRING(20),
        allowNull: true,
        comment: '單位名稱'
      },
      CREATE_DATE: {
        type: Sequelize.CHAR(6),
        allowNull: true,
        comment: '單位建立日期'
      },
      INVALID_DATE: {
        type: Sequelize.CHAR(6),
        allowNull: true,
        comment: '單位失效日期'
      },
      LEVEL_NO: {
        type: Sequelize.CHAR(1),
        allowNull: true,
        comment: '單位階層代號'
      },
      OFFICE_NO: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '辦公室代號'
      },
      UPPER_UNIT_NO: {
        type: Sequelize.STRING(8),
        allowNull: true,
        comment: '上一層單位代號'
      },
      MGR_NO: {
        type: Sequelize.STRING(8),
        allowNull: true,
        comment: '主管代號'
      },
      PUNCH_YN: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: '考勤處理方式'
      },
      FEES_UNIT_NO: {
        type: Sequelize.STRING(6),
        allowNull: true,
        comment: '費用歸屬單位'
      },
      POST_CODE: {
        type: Sequelize.STRING(5),
        allowNull: true
      },
      ADDRESS: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      TEL_AREA: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      TEL: {
        type: Sequelize.STRING(8),
        allowNull: true
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
