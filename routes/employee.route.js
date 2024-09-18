import express from "express";
import { createEmployee } from "../controllers/employee.controller.js";
const router = express.Router()

router.route('/createOrganization')
.post(createEmployee)

export default router;