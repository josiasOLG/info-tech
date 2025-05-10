import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeiculoSchema } from './infra/mongoose/veiculo.model'; // ✅ use schema diretamente
import { VeiculoRepository } from './infra/repository/veiculo.repository';
import { VeiculoController } from './interface/http/veiculo.controller';
import { CreateVeiculo } from './application/usecases/create-veiculo.usecase';
import { DeleteVeiculo } from './application/usecases/delete-veiculo.usecase';
import { GetAllVeiculos } from './application/usecases/get-all-veiculos.usecase';
import { GetVeiculoById } from './application/usecases/get-veiculo-by-id.usecase';
import { UpdateVeiculo } from './application/usecases/update-veiculo.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Veiculo', schema: VeiculoSchema }]),
  ],
  controllers: [VeiculoController],
  providers: [
    VeiculoRepository,
    CreateVeiculo,
    DeleteVeiculo,
    GetAllVeiculos,
    GetVeiculoById,
    UpdateVeiculo,
  ],
})
export class VeiculoModule {}
