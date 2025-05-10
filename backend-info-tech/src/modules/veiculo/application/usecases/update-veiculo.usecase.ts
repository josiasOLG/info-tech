import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from '../dto/create-veiculo.dto';
import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoMapper } from '../../infra/mongoose/veiculo.mapper';
import { VeiculoRepository } from '../../infra';

@Injectable()
export class UpdateVeiculo {
  constructor(private readonly repository: VeiculoRepository) {}

  async execute(id: string, data: Partial<CreateVeiculoDto>): Promise<Veiculo> {
    const partialEntity = VeiculoMapper.dtoToPartialEntity(data);
    return this.repository.update(id, partialEntity);
  }
}
