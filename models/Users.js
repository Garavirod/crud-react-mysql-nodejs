const sequelize = require('sequelize');
const db = require('../config/db');


const Users = db.define('Users', {
    uiid: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    email: {
        type: sequelize.STRING(100),
        allowNull: false,

    },
    password: {
        type: sequelize.STRING(60),
        allowNull: false,
    }
});

modules.exports = Users;