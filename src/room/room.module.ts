import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { Room } from './room';

@Module({
  controllers: [RoomController],
  providers: [Room]
})
export class RoomModule {}
