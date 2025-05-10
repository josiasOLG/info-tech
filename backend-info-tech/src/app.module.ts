import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from './shared';
import { ModulesModule } from './modules';
import { mongooseConfig } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri, {
      dbName: mongooseConfig.dbName,
      autoIndex: mongooseConfig.autoIndex,
    }),
    SharedModule,
    ModulesModule,
  ],
})
export class AppModule {}
