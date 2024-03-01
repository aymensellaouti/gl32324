import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerService } from './logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirstEntity } from './entity/first.entity';

/*export const firstServiceProvider = (loggerService: LoggerService) => {
  // busness logic
  console.log('Je vais te créer une dépence');

  return new FirstService(loggerService);
};
*/
@Module({
  imports: [TypeOrmModule.forFeature([FirstEntity])],
  controllers: [FirstController],
  providers: [
    FirstService,
    /*{
      provide: FirstService,
      useFactory: firstServiceProvider,
      inject: [LoggerService],
    },*/
  ],
})
export class FirstModule {}
