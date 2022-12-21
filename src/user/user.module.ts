import { Module } from '@nestjs/common';
import { EventService } from 'src/event/event.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, EventService],
  exports: [UserService],
})
export class UserModule {}
