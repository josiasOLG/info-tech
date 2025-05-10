import { MongooseModuleOptions } from '@nestjs/mongoose';
import { env } from './env';

export const mongooseConfig: MongooseModuleOptions & { uri: string } = {
  uri: env.MONGO_URI,
  dbName: env.MONGO_DB_NAME,
  autoIndex: env.NODE_ENV === 'development',
  connectTimeoutMS: 10000,
  socketTimeoutMS: 10000,
};
