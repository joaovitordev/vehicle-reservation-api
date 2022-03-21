import { Request, Response } from "express";

import VehicleSchema from "../models/vehicles";

export async function booking(req: Request | any, res: Response): Promise<Response> {
  const { vehicleId } = req.body;
  const user = req.user;

  const vehicle = await VehicleSchema.findById(vehicleId);
  if (vehicle.user) {
    return res.status(400).json({ error: "Veiculo já reservado" });
  }

  const userWithVehicle = await VehicleSchema.findOne({ "user._id": user._id });
  if (userWithVehicle) {
    return res.status(400).json({ error: "Usuário já reservou um veículo" });
  }

  await VehicleSchema.updateOne({ _id: vehicleId }, { user: user });

  return res.status(200).json({ success: 'Reserva realizada' });
}
