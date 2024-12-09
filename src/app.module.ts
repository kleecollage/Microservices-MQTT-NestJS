import { Module } from '@nestjs/common';
import { MqttPublisherModule } from 'src/modules/mqtt-publisher/mqtt-publisher.module';
import { MqttSubscriberModule } from 'src/modules/mqtt-subscriber/mqtt-subscriber.module';

@Module({
  imports: [MqttPublisherModule, MqttSubscriberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
