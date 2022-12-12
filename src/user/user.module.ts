import { Module } from '@nestjs/common';
import { EventService } from 'src/event/event.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, EventService]
})
export class UserModule {}
