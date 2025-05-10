import { Injectable } from '@nestjs/common';
import { IVeiculoRepository } from '../../domain/iveiculo-repository';
import { Veiculo } from '../../domain/veiculo.entity';
import { VeiculoModel } from '../mongoose/veiculo.model';
import { VeiculoMapper } from '../mongoose/veiculo.mapper';

@Injectable()
export class VeiculoRepository implements IVeiculoRepository {
  async create(entity: Veiculo): Promise<Veiculo> {
    const doc = await VeiculoModel.create(VeiculoMapper.toPersistence(entity));
    return VeiculoMapper.toDomain(doc);
  }

  async findAll(): Promise<Veiculo[]> {
    const docs = await VeiculoModel.find();
    return docs.map((doc) => VeiculoMapper.toDomain(doc));
  }

  async findById(id: string): Promise<Veiculo | null> {
    const doc = await VeiculoModel.findById(id);
    return doc ? VeiculoMapper.toDomain(doc) : null;
  }

  async update(id: string, data: Partial<Veiculo>): Promise<Veiculo> {
    const doc = await VeiculoModel.findByIdAndUpdate(id, data, { new: true });
    return VeiculoMapper.toDomain(doc!);
  }

  async delete(id: string): Promise<void> {
    await VeiculoModel.findByIdAndDelete(id);
  }
}
