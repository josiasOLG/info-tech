import { Request, Response } from "express";
import { CreateUserSchema } from "../../application/dto";
import { CreateUser } from "../../application/usecases";
import { UserRepository } from "../../infra";

export class UserController {
  static async create(req: Request, res: Response) {
    try {
      const data = CreateUserSchema.parse(req.body);
      const useCase = new CreateUser(new UserRepository());
      const user = await useCase.execute(data);
      return res.status(201).json({ status: "success", data: user });
    } catch (err: any) {
      return res.status(400).json({ status: "error", message: err.message });
    }
  }

  static async list(_req: Request, res: Response) {
    try {
      const useCase = new CreateUser(new UserRepository());
      const users = await useCase.list();
      return res.json({ status: "success", data: users });
    } catch (err: any) {
      return res.status(400).json({ status: "error", message: err.message });
    }
  }
}
