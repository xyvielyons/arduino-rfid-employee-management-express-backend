import express from "express";
import { CreateOrganization,UpdateOrganization,DeleteOrganization } from "../controllers/organization.controller.js";
const router = express.Router()

router.route('/createorganization')
.post(CreateOrganization)
router.route('/updateorganization')
.post(UpdateOrganization)
router.route('/deleteorganization')
.post(DeleteOrganization)


export default router;