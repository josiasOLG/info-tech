import { Veiculo } from './veiculo.entity';

export interface IVeiculoRepository {
  create(data: Veiculo): Promise<Veiculo>;
  findById(id: string): Promise<Veiculo | null>;
  findAll(): Promise<Veiculo[]>;
  update(id: string, data: Partial<Veiculo> ): Promise<Veiculo>;
  delete(id: string): Promise<void>;
}
