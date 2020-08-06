const sequelize = require("sequelize");
const db = require("../config/db");
const Role = require("./Role"); //FK

const Employee = db.define("Employee", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: sequelize.STRING,
    email: sequelize.STRING,
    address: sequelize.STRING,
    phone: sequelize.STRING,
    roleId: {
        type: sequelize.INTEGER,
        // This is a reference to another model
        references: {
            model: Role,
            key: "id",
        },
    },
});

Employee.belongsTo(Role);

module.exports = Employee;