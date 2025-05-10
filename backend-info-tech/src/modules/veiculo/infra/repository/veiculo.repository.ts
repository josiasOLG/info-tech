import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VeiculoDocument } from '../mongoose/veiculo.model';
import { VeiculoMapper } from '../mongoose';
import { Injectable } from '@nestjs/common';
import { IVeiculoRepository, Veiculo } from '../../domain';

@Injectable()
export class VeiculoRepository implements IVeiculoRepository {
  constructor(
    @InjectModel('Veiculo')
    private readonly veiculoModel: Model<VeiculoDocument>,
  ) {}

  async create(entity: Veiculo): Promise<Veiculo> {
    const doc = await this.veiculoModel.create(
      VeiculoMapper.toPersistence(entity),
    );
    return VeiculoMapper.toDomain(doc);
  }

  async findAll(): Promise<Veiculo[]> {
    const docs = await this.veiculoModel.find().exec();
    return docs.map((doc) => VeiculoMapper.toDomain(doc));
  }

  async findById(id: string): Promise<Veiculo | null> {
    const doc = await this.veiculoModel.findById(id).exec();
    return doc ? VeiculoMapper.toDomain(doc) : null;
  }

  async update(id: string, data: Partial<Veiculo>): Promise<Veiculo> {
    const doc = await this.veiculoModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    return VeiculoMapper.toDomain(doc!);
  }

  async delete(id: string): Promise<void> {
    await this.veiculoModel.findByIdAndDelete(id).exec();
  }
}
