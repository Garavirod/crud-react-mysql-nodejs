import Employee from "../models/Employee";
import Role from "../models/Role";
const db = require("../config/db");
const controllers = {}

controllers.testdata = async(req, res) => {
    const response = await db
        .sync()
        .then(function() {
            // Create role
            Role.create({
                role: "Admin",
            });
            // Create employee
            Employee.create({
                name: "Malena Morgan",
                email: "malena@mail.com",
                address: "California Cll 108",
                phone: "123456789",
                roleId: 1,
            });
            // Call whole data
            const data = Employee.findAll();
            return data;
        })
        .catch((err) => {
            return err;
        });
    res.json(response);
};

controllers.list = async(req, res) => {
    const data = await Employee.findAll();
    res.json(data);
};


module.exports = controllers;