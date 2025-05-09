import { Request, Response } from "express";
import { VehicleRepository } from "../../infra/repository/VehicleRepository";
import { CreateVehicle } from "../../application/usecases/CreateVehicle";

export class VehicleController {
  async create(req: Request, res: Response) {
    try {
      const repo = new VehicleRepository();
      const usecase = new CreateVehicle(repo);
      await usecase.execute(req.body);
      return res.status(201).json({ message: "Veículo criado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar veículo" });
    }
  }
}
