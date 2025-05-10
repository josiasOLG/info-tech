import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoDocument } from './veiculo.model';
import { CreateVeiculoDto } from '../../application/dto/create-veiculo.dto';

export class VeiculoMapper {
  static toDomain(doc: VeiculoDocument): Veiculo {
    return new Veiculo(
      doc._id,
      doc.placa,
      doc.chassi,
      doc.renavam,
      doc.modelo,
      doc.ano,
    );
  }

  static toPersistence(entity: Veiculo): any {
    return {
      id: entity._id,
      placa: entity.placa,
      chassi: entity.chassi,
      renavam: entity.renavam,
      modelo: entity.modelo,
      ano: entity.ano,
    };
  }

  static dtoToPartialEntity(dto: Partial<CreateVeiculoDto>): Partial<Veiculo> {
    return {
      _id: dto._id!,
      placa: dto.placa!,
      chassi: dto.chassi!,
      renavam: dto.renavam!,
      modelo: dto.modelo!,
      ano: dto.ano!,
    };
  }
}
