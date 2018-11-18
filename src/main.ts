import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// hello
const t = "are we cool with double quotes?"

// test3
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
