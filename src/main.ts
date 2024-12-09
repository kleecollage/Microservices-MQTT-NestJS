import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { connectionMQTT } from 'src/constants/constants';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: `mqtt://${connectionMQTT.broker.host}:${connectionMQTT.broker.port}`,
    },
  });
  app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
