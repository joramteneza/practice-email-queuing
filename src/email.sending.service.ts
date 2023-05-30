import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class EmailSerndingService {
  constructor(@InjectQueue('email-sending') private queue: Queue) {}

  async sendEmail(msg: string) {
    await this.queue.add('email-job', {
      text: msg,
    });
  }
}
