import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { PATTERNS } from 'src/modules/example-communication/example-communication.constants';
import { ExampleCommunicationService } from 'src/modules/example-communication/example-communication.service';

@Controller('api/v1/microservice-b2')
export class ExampleCommunicationController {
  constructor(
    private exampleCommunicationService: ExampleCommunicationService,
  ) {}

  @Get('send-message')
  sendMessage() {
    return this.exampleCommunicationService.sendMessagePatern(
      'Message sended from Backend 2',
    );
  }

  @MessagePattern(PATTERNS.MESSAGES.SEND_MESSAGE)
  receiveMessageFromMessagePatternB2(data: { message: string }) {
    console.log('[MESSAGE_PATERN] Message received.', data.message);
    this.exampleCommunicationService.sendEventPattern(
      'Message back from Backend 2',
    );
    return true;
  }

  @EventPattern(PATTERNS.EVENTS.RECEIVE_MESSAGE)
  receiveMessageFromEventB1(data: { message: string }) {
    console.log('[EVENT_PATTERN] Message received.', data.message);
  }
}
