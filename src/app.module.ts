import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondController } from './second/second.controller';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirstEntity } from './first/entity/first.entity';
import { ProfileModule } from './profile/profile.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessagesGateway } from './messages/messages.gateway';

@Module({
  imports: [
    FirstModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gl32324',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    ProfileModule,
    EventEmitterModule.forRoot()
  ],
  controllers: [AppController, SecondController],
  providers: [AppService, MessagesGateway],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes();
  }
}
