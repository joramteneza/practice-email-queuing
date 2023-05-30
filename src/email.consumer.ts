import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email-sending')
export class EmailConsumer {
  @Process('email-job')
  emailjob(job: Job<unknown>) {
    console.log(job.data);
  }
}
