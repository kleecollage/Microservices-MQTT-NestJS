import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { connectionMQTT } from 'src/constants/constants';
import { MqttSubscriberController } from './mqtt-subscriber.controller';
import { MqttSubscriberService } from './mqtt-subscriber.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.MQTT,
        name: connectionMQTT.clientID,
        options: {
          url: `mqtt://${connectionMQTT.broker.host}:${connectionMQTT.broker.port}`,
        },
      },
    ]),
  ],
  controllers: [MqttSubscriberController],
  providers: [MqttSubscriberService],
})
export class MqttSubscriberModule {}
