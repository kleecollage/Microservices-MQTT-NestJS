import { Module } from '@nestjs/common';
import { MicroserviceConnectionService } from 'src/modules/microservice-connection/microservice-connection.service';

@Module({
  providers: [MicroserviceConnectionService],
  exports: [MicroserviceConnectionService],
})
export class MicroserviceConnectionModule {}
