import express from "express";
import { createEmployee,getEmployees,deleteEmployee } from "../controllers/employee.controller.js";
const router = express.Router()

router.route('/createOrganization')
.post(createEmployee)
router.route('/getEmployees')
.get(getEmployees)
router.route('/deleteEmployee')
.post(deleteEmployee)


export default router;