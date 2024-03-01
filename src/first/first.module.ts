import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerService } from './logger.service';

export const firstServiceProvider = (loggerService: LoggerService) => {
  // busness logic
  console.log('Je vais te créer une dépence');

  return new FirstService(loggerService);
};

@Module({
  controllers: [FirstController],
  providers: [
    {
      provide: FirstService,
      useFactory: firstServiceProvider,
      inject: [LoggerService],
    },
  ],
})
export class FirstModule {}
