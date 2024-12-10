import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { connectionMQTT } from 'src/constants/constants';

@Injectable()
export class MqttSubscriberService {
  constructor(
    @Inject(connectionMQTT.clientID)
    private client: ClientProxy,
  ) {}

  publishTopic(topic: string, data: any) {
    // this.client.send(topic, data).subscribe();
    this.client.send(topic, data).subscribe();
    console.log(topic, data);
    return true;
  }
}
