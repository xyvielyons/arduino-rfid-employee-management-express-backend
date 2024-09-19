import express from "express";
import { createCheckin,getCheckins,deleteCheckin } from "../controllers/checkin.controller.js";
const router = express.Router()

router.route('/createcheckin')
.post(createCheckin)
router.route('/getcheckin')
.post(getCheckins)
router.route('/deletecheckin')
.post(deleteCheckin)

export default router;