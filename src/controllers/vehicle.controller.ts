import { Request, Response } from 'express';

import { Vehicle } from '../interface/Vehicle';
import VehicleSchema from '../models/vehicles';

import { Vehicles } from '../../vehicles'

export async function getVehicles(req: Request, res: Response): Promise<Response> {
    const vehicles: Vehicle[] = await VehicleSchema.find();

    return res.json(vehicles);
}

export async function createVehicle(req: Request, res: Response) {
    const vehicle: Vehicle[] = Vehicles;
    const newVehicle = await VehicleSchema.insertMany(vehicle)

    return res.json(newVehicle);
}
