export interface VehicleProps {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
}

export class Vehicle {
  constructor(
    public readonly props: VehicleProps,
    public readonly id?: string
  ) {}

  get plate() {
    return this.props.plate;
  }
}
