import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['127.0.0.1:29092'],
        },
        consumer: {
          groupId: 'payment-consumer',
        },
      },
    }
  );
  await app.listen();
}

bootstrap();
