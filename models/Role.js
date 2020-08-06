const sequelize = require('sequelize');
const db = require("../config/db");

const Role = db.define("role", {
    role: sequelize.STRING,
});

module.exports = Role;