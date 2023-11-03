const sequelize = require('sequelize');

const sequelize = new sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;