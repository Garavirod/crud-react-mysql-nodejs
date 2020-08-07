import express from 'express';
const router = express.Router();

//importing controllers
const employeeController = require('../controllers/EmployeeController');


// Routes Employee

router.get('/testdata', employeeController.testdata);
router.get('/list', employeeController.list);
router.get('/create', employeeController.create);
router.get('/save', (req, res) => {
    res.json({ status: 'Employeed Saved' });
});


module.exports = router;