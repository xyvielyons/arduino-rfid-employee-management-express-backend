import express from "express";
import { createCheckout,deleteCheckout,getCheckouts } from "../controllers/checkout.controller.js";
const router = express.Router()

router.route('/createcheckout')
.post(createCheckout)
router.route('/getcheckout')
.post(getCheckouts)
router.route('/deletecheckout')
.post(deleteCheckout)

export default router;