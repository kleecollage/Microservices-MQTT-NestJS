import { Controller } from '@nestjs/common';
import { MqttPublisherService } from 'src/modules/mqtt-publisher/mqtt-publisher.service';

@Controller('api/v1/mqtt-publisher')
export class MqttPublisherController {
  constructor(private mqttPublisherService: MqttPublisherService) {}
}
