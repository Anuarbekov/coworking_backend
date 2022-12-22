import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CoworkingModule } from './coworking/coworking.module';
import { RoomModule } from './room/room.module';
import { EventModule } from './event/event.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    UserModule,
    AuthModule,
    CoworkingModule,
    RoomModule,
    EventModule,
    PrismaModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
})
export class AppModule {}
