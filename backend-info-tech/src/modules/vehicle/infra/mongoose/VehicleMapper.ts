import { Vehicle } from "../../domain/Vehicle";
import { VehicleModelClass } from "./VehicleModel";

export class VehicleMapper {
  static toDomain(raw: VehicleModelClass): Vehicle {
    return new Vehicle(
      {
        plate: raw.plate,
        chassis: raw.chassis,
        renavam: raw.renavam,
        model: raw.model,
        brand: raw.brand,
        year: raw.year,
      },
      raw._id.toString()
    );
  }

  static toPersistence(vehicle: Vehicle) {
    return {
      plate: vehicle.props.plate,
      chassis: vehicle.props.chassis,
      renavam: vehicle.props.renavam,
      model: vehicle.props.model,
      brand: vehicle.props.brand,
      year: vehicle.props.year,
    };
  }
}
