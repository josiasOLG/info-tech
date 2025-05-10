import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

import { CreateVeiculoDto } from '../../application/dto/create-veiculo.dto';
import { CreateVeiculo } from '../../application/usecases/create-veiculo.usecase';
import { DeleteVeiculo } from '../../application/usecases/delete-veiculo.usecase';
import { GetAllVeiculos } from '../../application/usecases/get-all-veiculos.usecase';
import { GetVeiculoById } from '../../application/usecases/get-veiculo-by-id.usecase';
import { UpdateVeiculo } from '../../application/usecases/update-veiculo.usecase';
import { HttpResponse } from 'src/shared';

@ApiTags('Veículos')
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
  @ApiOperation({ summary: 'Cria um novo veículo' })
  @ApiBody({ type: CreateVeiculoDto })
  async create(@Body() dto: CreateVeiculoDto, @Res() res: Response) {
    try {
      const result = await this.createUseCase.execute(dto);
      return HttpResponse.created(res, result, 'Veículo criado com sucesso');
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : 'Erro interno ao criar veículo';
      return HttpResponse.error(res, message);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os veículos' })
  async findAll(@Res() res: Response) {
    try {
      const result = await this.getAllUseCase.execute();
      return HttpResponse.ok(res, result);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Erro ao buscar veículos';
      return HttpResponse.error(res, message);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um veículo pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do veículo' })
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.getByIdUseCase.execute(id);
      if (!result) return HttpResponse.notFound(res, 'Veículo não encontrado');
      return HttpResponse.ok(res, result);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Erro ao buscar veículo';
      return HttpResponse.error(res, message);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um veículo existente' })
  @ApiParam({ name: 'id', description: 'ID do veículo' })
  @ApiBody({ type: CreateVeiculoDto })
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateVeiculoDto>,
    @Res() res: Response,
  ) {
    try {
      const result = await this.updateUseCase.execute(id, dto);
      return HttpResponse.ok(res, result, 'Veículo atualizado com sucesso');
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Erro ao atualizar veículo';
      return HttpResponse.error(res, message);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um veículo pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do veículo' })
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.deleteUseCase.execute(id);
      return HttpResponse.ok(res, null, 'Veículo removido com sucesso');
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Erro ao remover veículo';
      return HttpResponse.error(res, message);
    }
  }
}
