import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from './shared';
import { ModulesModule } from './modules';
import { mongooseConfig } from './config';
import { connectionFactory } from './config'; // ajuste o caminho

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri, {
      dbName: mongooseConfig.dbName,
      autoIndex: mongooseConfig.autoIndex,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      connectionFactory,
    }),
    SharedModule,
    ModulesModule,
  ],
})
export class AppModule {}
