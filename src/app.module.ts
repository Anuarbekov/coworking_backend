import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CoworkingModule } from './coworking/coworking.module';
import { RoomModule } from './room/room.module';
import { EventModule } from './event/event.module';

@Module({

  imports: [UserModule, AuthModule, CoworkingModule, RoomModule, EventModule]
})
export class AppModule {}
