import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TestInterceptor } from './test/test.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: true});
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  // app.useGlobalInterceptors(new TestInterceptor());
  await app.listen(3000);
}
bootstrap();
