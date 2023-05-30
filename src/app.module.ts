import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailConsumer } from './email.consumer';
import { EmailSerndingService } from './email.sending.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'email-sending',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, EmailSerndingService, EmailConsumer],
})
export class AppModule {}
