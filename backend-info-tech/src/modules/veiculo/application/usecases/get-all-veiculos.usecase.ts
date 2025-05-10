import { Injectable } from '@nestjs/common';
import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoRepository } from '../../infra';

@Injectable()
export class GetAllVeiculos {
  constructor(private readonly repository: VeiculoRepository) {}

  async execute(): Promise<Veiculo[]> {
    return this.repository.findAll();
  }
}
