import { Router } from 'express';
const router = Router();

import { getVehicles, createVehicle } from '../controllers/vehicle.controller';

router.route('/')
      .get(getVehicles)
      .post(createVehicle);

export default router;  