import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware";

import { booking } from "../controllers/booking.controller";

router.use(authMiddleware);
router.route("/")
    .post(booking)
    
router.route('/')

export default router;
