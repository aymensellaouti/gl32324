import { Global, Module } from '@nestjs/common';
import { LoggerService } from '../first/logger.service';

@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class CommonModule {}
