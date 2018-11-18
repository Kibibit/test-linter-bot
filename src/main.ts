import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const t = "are we cool with double quotes?"

// test2
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
