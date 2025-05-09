import { CreateVehicleDTO } from "../dto/CreateVehicleDTO";
import { IVehicleRepository } from "../../domain/IVehicleRepository";
import { Vehicle } from "../../domain/Vehicle";

export class CreateVehicle {
  constructor(private vehicleRepo: IVehicleRepository) {}

  async execute(data: CreateVehicleDTO): Promise<void> {
    const vehicle = new Vehicle(data);
    await this.vehicleRepo.create(vehicle);
  }
}
