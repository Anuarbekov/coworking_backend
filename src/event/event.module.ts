import { AuthModule } from './../auth/auth.module';
import { Module, forwardRef } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({
  providers: [EventService],
  controllers: [EventController],
  imports: [forwardRef(() => AuthModule)],
})
export class EventModule {}
