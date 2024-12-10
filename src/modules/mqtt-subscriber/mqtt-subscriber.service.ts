import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttContext } from '@nestjs/microservices';
import { connectionMQTT } from 'src/constants/constants';

@Injectable()
export class MqttSubscriberService {
  constructor(
    @Inject(connectionMQTT.clientID)
    private client: ClientProxy,
  ) {}

  async publishTopic(topic: string, data: any) {
    try {
      await this.client.connect();
      this.client.send(topic, data).subscribe();
      return true;
    } catch (error) {
      console.error('No connection. ', error);
      return false;
    }
  }

  getData(context: MqttContext, payload: any) {
    console.log('Topic: ', context.getTopic());
    console.log('Data: ', payload);
  }
}
