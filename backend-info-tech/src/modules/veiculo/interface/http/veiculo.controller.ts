import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateVeiculoDto } from '../../application/dto/create-veiculo.dto';
import { CreateVeiculo } from '../../application/usecases/create-veiculo.usecase';
import { DeleteVeiculo } from '../../application/usecases/delete-veiculo.usecase';
import { GetAllVeiculos } from '../../application/usecases/get-all-veiculos.usecase';
import { GetVeiculoById } from '../../application/usecases/get-veiculo-by-id.usecase';
import { UpdateVeiculo } from '../../application/usecases/update-veiculo.usecase';

@Controller('veiculos')
export class VeiculoController {
  constructor(
    private createUseCase: CreateVeiculo,
    private deleteUseCase: DeleteVeiculo,
    private getAllUseCase: GetAllVeiculos,
    private getByIdUseCase: GetVeiculoById,
    private updateUseCase: UpdateVeiculo,
  ) {}

  @Post()
  create(@Body() dto: CreateVeiculoDto) {
    return this.createUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.getAllUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getByIdUseCase.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateVeiculoDto>) {
    return this.updateUseCase.execute(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
