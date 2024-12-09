import { Module } from '@nestjs/common';
import { MicroserviceConnectionModule } from 'src/modules/microservice-connection/microservice-connection.module';
import { ExampleCommunicationController } from './example-communication.controller';
import { ExampleCommunicationService } from './example-communication.service';

@Module({
  imports: [MicroserviceConnectionModule],
  controllers: [ExampleCommunicationController],
  providers: [ExampleCommunicationService],
})
export class ExampleCommunicationModule {}
