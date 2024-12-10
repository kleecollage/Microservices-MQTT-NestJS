import { Module } from '@nestjs/common';
import { ClientsModule, Serializer, Transport } from '@nestjs/microservices';
import { connectionMQTT } from 'src/constants/constants';
import { MqttSubscriberController } from './mqtt-subscriber.controller';
import { MqttSubscriberService } from './mqtt-subscriber.service';

export class MessageSerializer implements Serializer {
  serialize(value: any, options?: Record<string, any>) {
    console.log(options);
    return value.data;
  }
}

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.MQTT,
        name: connectionMQTT.clientID,
        options: {
          url: `mqtt://${connectionMQTT.broker.host}:${connectionMQTT.broker.port}`,
          serializer: new MessageSerializer(),
        },
      },
    ]),
  ],
  controllers: [MqttSubscriberController],
  providers: [MqttSubscriberService],
  exports: [MqttSubscriberService],
})
export class MqttSubscriberModule {}
