const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'j0j0i55iMySQL', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
