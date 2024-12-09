import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PATTERNS } from 'src/modules/example-communication/example-communication.constants';
import { MicroserviceConnectionService } from 'src/modules/microservice-connection/microservice-connection.service';

@Injectable()
export class ExampleCommunicationService {
  constructor(private microserviceConnection: MicroserviceConnectionService) {}

  async sendMessagePatern(message: string) {
    try {
      await this.microserviceConnection.connectClient();
      return firstValueFrom(
        this.microserviceConnection
          .getClient()
          .send(PATTERNS.MESSAGES.SEND_MESSAGE, { message }),
      );
    } catch (error) {
      console.error('No Connection', error);
      return false;
    }
  }

  async sendEventPattern(message: string) {
    try {
      await this.microserviceConnection.connectClient();
      return firstValueFrom(
        this.microserviceConnection
          .getClient()
          .emit(PATTERNS.EVENTS.RECEIVE_MESSAGE, { message }),
      );
    } catch (error) {
      console.log('No connection', error);
      return false;
    }
  }
}
