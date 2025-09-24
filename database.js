const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://localhost:3306/practica6',{
    host: process.env.DB_HOST,
    username: 'root',
    password: '123abc*_',
    dialect: 'mysql'
});

module.exports = sequelize;