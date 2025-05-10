import { Injectable } from '@nestjs/common';
import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoRepository } from '../../infra';

@Injectable()
export class GetVeiculoById {
  constructor(private readonly repository: VeiculoRepository) {}

  async execute(id: string): Promise<Veiculo | null> {
    return this.repository.findById(id);
  }
}
