import { Module } from '@nestjs/common';
import { VeiculoModule } from './veiculo/veiculo.module';

@Module({
  imports: [VeiculoModule],
})
export class ModulesModule {}
