import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoDocument } from './veiculo.model';
import { CreateVeiculoDto } from '../../application/dto/create-veiculo.dto';

export class VeiculoMapper {
  static toDomain(doc: VeiculoDocument): Veiculo {
    return new Veiculo({
      id: doc.id,
      placa: doc.placa,
      chassi: doc.chassi,
      renavam: doc.renavam,
      modelo: doc.modelo,
      ano: doc.ano,
    });
  }

  static toPersistence(entity: Veiculo): any {
    return entity.props;
  }

  static dtoToPartialEntity(dto: Partial<CreateVeiculoDto>): Partial<Veiculo> {
    return {
      props: {
        id: dto.id,
        placa: dto.placa,
        chassi: dto.chassi,
        renavam: dto.renavam,
        modelo: dto.modelo,
        ano: dto.ano,
      }
    } as Partial<Veiculo>;
  }
}
