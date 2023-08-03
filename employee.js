const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employeecontroller')

router.get('/',EmployeeController.index)
router.get('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.get('/update',EmployeeController.update)
router.get('/destroy',EmployeeController.destroy)
module.exports = router