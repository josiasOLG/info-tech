import { Injectable } from '@nestjs/common';
import { VeiculoRepository } from '../../infra';

@Injectable()
export class DeleteVeiculo {
  constructor(private readonly repository: VeiculoRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
