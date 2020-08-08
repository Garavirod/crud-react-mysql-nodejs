import express from 'express';
const router = express.Router();

//importing controllers
const employeeController = require('../controllers/EmployeeController');


// Routes Employee
router.get('/testdata', employeeController.testdata);
// Read
router.get('/list', employeeController.list);
// Create
router.post('/create', employeeController.create);
// Update
router.put('/update/:id', employeeController.update);
// Read by id
router.get('/employee/:id', employeeController.oneEmployee);
// -----------------------------
router.get('/save', (req, res) => {
    res.json({ status: 'Employeed Saved' });
});


module.exports = router;