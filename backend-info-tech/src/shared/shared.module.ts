import { Global, Module } from '@nestjs/common';
import { ErrorHandlerMiddleware } from './middlewares/error-handler.middleware';

@Global()
@Module({
  providers: [ErrorHandlerMiddleware],
  exports: [ErrorHandlerMiddleware],
})
export class SharedModule {}
