import express from "express";
import { createEmployee,getEmployees,deleteEmployee } from "../controllers/employee.controller.js";
const router = express.Router()

router.route('/createOrganization')
.post(createEmployee)
router.route('/getEmployees')
.post(getEmployees)
router.route('/deleteEmployee')
.post(deleteEmployee)


export default router;