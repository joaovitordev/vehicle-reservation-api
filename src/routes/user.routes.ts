import { Router } from 'express';
const router = Router();

import { signUp, signIn, myBooking, returnVehicle } from '../controllers/user.controller';
import { authMiddleware } from "../middlewares/auth.middleware";

router.route('/signIn').post(signIn)
router.route('/signUp').post(signUp)

router.use(authMiddleware);

router.route('/:userId/vehicles').get(myBooking)
router.route('/:userId/vehicles').delete(returnVehicle)

export default router;  