import Employee from "../models/Employee";
import Role from "../models/Role";
const db = require("../config/db");
const controllers = {};

// Migrate if not exist tables
db.sync();

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
    const data = await Employee.findAll({
            // This includes in the json the Role object
            include: [Role],
        })
        .then(function(data) {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
    // res.json(data);
    res.json({ success: true, data: data });
};

// Read by id
controllers.oneEmployee = async(req, res) => {
    // req.params['id']
    const _id = req.params.id;
    const data = await Employee.findOne({
            where: { id: _id },
        })
        .then(function(data) {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });

    res.json({ success: true, data: data });
};

controllers.create = async(req, res) => {
    // Data
    const { name, email, address, phone, role } = req.body;
    console.log(req.body);

    // create
    const data = await Employee.create({
            name: name,
            email: email,
            address: address,
            phone: phone,
            roleId: role,
        })
        .then(function(data) {
            return data;
        })
        .catch((error) => {
            console.log("Error trying to save on DBB " + error);
            return error;
        });
    // return res
    res.status(200).json({
        success: true,
        message: "Guardo exitosamente",
        data: data,
    });
};

controllers.update = async(req, res) => {
    // New data
    const _id = req.params.id; //:id
    const { name, email, address, phone, role } = req.body;
    // Update data
    const data = await Employee.update({
            name: name,
            email: email,
            address: address,
            phone: phone,
            roleId: role,
        }, {
            where: { id: _id },
        })
        .then(function(data) {
            return data;
        })
        .catch((error) => {
            return error;
        });
    res.json({ success: true, data: data, message: "Updated successfuly!" });
};

// DELETE
controllers.delete = async(req, res) => {
    const _id = req.params.id; //:id
    const del = await Employee.destroy({
        where: { id: _id },
    });
    res.json({ success: true, deleted: del, message: "Deleted successful" });
};

module.exports = controllers;