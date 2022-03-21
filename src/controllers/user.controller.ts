import { Request, Response } from "express";

import { User } from "../interface/User";
import UserSchema from "../models/user";

import VehicleSchema from "../models/vehicles";

import * as bcrypt from "bcrypt";
import { v1 as uuidv1 } from "uuid";

export async function signIn(req: Request, res: Response): Promise<Response> {
  const user: User = req.body;

  const userExists = await UserSchema.findOne({
    $and: [
      { email: user.email },
    ],
  });

  if (!userExists) {
    return res.status(404).json({ error: "Email ou senha incorretos" });
  }

  const match = await bcrypt.compare(user.password, userExists.password);

  if (!match) {
    return res.status(404).json({ error: "Email ou senha incorretos" });
  }

  const userWithToken = await UserSchema.updateOne(
    { _id: userExists._id },
    { accessToken: uuidv1() }
  );

  return res.json(await UserSchema.findById(userExists._id));
}

export async function signUp(req: Request, res: Response) {
  const user: User = req.body;

  const userExists = await UserSchema.findOne({ email: user.email });
  if (userExists) {
    return res.status(400).json({ error: "Email já cadastrado" });
  }

  const newUser = await UserSchema.create({
    ...user,
    password: bcrypt.hashSync(user.password, 10),
  });

  return res.json(newUser);
}

export async function myBooking(req: Request | any, res: Response) {
  const { userId } = req.params;

  const myBooking = await VehicleSchema.findOne({ "user._id": userId });

  if(!myBooking) {
    return res.status(200).json({});
  }

  return res.status(200).json(myBooking);
}

export async function returnVehicle(req: Request | any, res: Response) {
  const { userId } = req.params;

  await VehicleSchema.updateOne({ 'user._id': userId  }, { user: null });

  return res.status(200).json({ success: "Veículo devolvido" });

}
