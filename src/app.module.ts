import { Module } from '@nestjs/common';
import { ExampleCommunicationModule } from 'src/modules/example-communication/example-communication.module';

@Module({
  imports: [ExampleCommunicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
