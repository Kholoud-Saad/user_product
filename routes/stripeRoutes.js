import express from "express";
import { stripePayment } from "../controller/stripeController.js";

const router = express.Router()

router.route('/').post(stripePayment )
export default router
