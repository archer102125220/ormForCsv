'use strict';

const nodeEnv = process.env.NODE_ENV || 'development';

//https://github.com/sequelize/cli/issues/766

const envConfig = {
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  operatorsAliases: false,
  define: {
    charset: process.env.DB_DEFINE_CHARSET,
    collate: process.env.DB_DEFINE_COLLATE,
  },

  dialectOptions: {
    dialect: process.env.DB_CONNECTION,
    charset: process.env.DB_DIALECT_OPTIONS_CHARSET,
    collate: process.env.DB_DIALECT_OPTIONSE_COLLATE,
    instanceName: process.env.DB_SERVER_NAME,
    enableArithAbort: false,
    encrypt: true,
  }
};

module.exports = {
  [nodeEnv]: envConfig,
};
