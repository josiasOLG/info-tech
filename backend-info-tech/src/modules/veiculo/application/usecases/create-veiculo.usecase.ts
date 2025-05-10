import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from '../dto/create-veiculo.dto';
import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoRepository } from '../../infra';

@Injectable()
export class CreateVeiculo {
  constructor(private readonly repository: VeiculoRepository) {}

  async execute(data: CreateVeiculoDto): Promise<Veiculo> {
    const entity = new Veiculo(
      data._id,
      data.placa,
      data.chassi,
      data.renavam,
      data.modelo,
      data.ano,
    );
    return this.repository.create(entity);
  }
}
