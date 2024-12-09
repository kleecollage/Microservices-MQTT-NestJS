import { Controller } from '@nestjs/common';
import { MqttSubscriberService } from 'src/modules/mqtt-subscriber/mqtt-subscriber.service';

@Controller('mqtt-subscriber')
export class MqttSubscriberController {
  constructor(private mqttSubscriberService: MqttSubscriberService) {}
}
