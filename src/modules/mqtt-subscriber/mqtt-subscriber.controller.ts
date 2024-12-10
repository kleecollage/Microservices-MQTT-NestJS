import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { MqttSubscriberService } from 'src/modules/mqtt-subscriber/mqtt-subscriber.service';

@Controller('mqtt-subscriber')
export class MqttSubscriberController {
  constructor(private mqttSubscriberService: MqttSubscriberService) {}

  @MessagePattern('ddr-nestjs/#')
  listtenTopics(@Ctx() context: MqttContext, @Payload() payload: any) {
    this.mqttSubscriberService.getData(context, payload);
  }
}
