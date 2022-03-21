import { Request, Response } from "express";

import UserSchema from "../models/user";

export const authMiddleware = async (
  req: Request | any,
  res: Response,
  next: any
) => {
  const accessToken = req?.headers?.authorization;

  if (!accessToken) {
    return res.status(400).json({ error: "Usuário deve fazer login" });
  }

  const user = await UserSchema.findOne({ accessToken });

  if (!user) {
    return res.status(400).json({ error: "Token expirado ou inválido" });
  }

  req.user = user;

  next();
};
