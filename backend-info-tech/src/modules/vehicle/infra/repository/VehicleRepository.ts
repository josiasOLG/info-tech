import { IVehicleRepository } from "../../domain/IVehicleRepository";
import { Vehicle } from "../../domain/Vehicle";
import { VehicleModel } from "../mongoose/VehicleModel";
import { VehicleMapper } from "../mongoose/VehicleMapper";

export class VehicleRepository implements IVehicleRepository {
  async create(vehicle: Vehicle): Promise<void> {
    const data = VehicleMapper.toPersistence(vehicle);
    await VehicleModel.create(data);
  }

  async findById(id: string): Promise<Vehicle | null> {
    const result = await VehicleModel.findById(id);
    return result ? VehicleMapper.toDomain(result) : null;
  }

  async findAll(): Promise<Vehicle[]> {
    const results = await VehicleModel.find();
    return results.map(VehicleMapper.toDomain);
  }

  async update(vehicle: Vehicle): Promise<void> {
    await VehicleModel.findByIdAndUpdate(
      vehicle.id,
      VehicleMapper.toPersistence(vehicle)
    );
  }

  async delete(id: string): Promise<void> {
    await VehicleModel.findByIdAndDelete(id);
  }
}
