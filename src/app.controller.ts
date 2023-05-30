import { Controller, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';
import { EmailSerndingService } from './email.sending.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private emailSendingService: EmailSerndingService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-email')
  sendEmail(@Query('msg') msg: string) {
    console.log(msg);
    return this.emailSendingService.sendEmail(msg);
  }
}
