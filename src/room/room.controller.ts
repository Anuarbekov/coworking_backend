import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { RoomDto } from './dto';
import { RoomService } from './room.service';

import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger/dist';

@ApiTags('Комнаты')
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @ApiOperation({ summary: 'Список комнат' })
  @ApiResponse({ status: 200, type: [RoomDto] })
  @Get()
  getAll() {
    return this.roomService.getAll();
  }

  @ApiOperation({ summary: 'Комната по айди' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Get(':id')
  get(@Param('id') id: number) {
    return this.roomService.get(id);
  }

  @ApiOperation({ summary: 'Создать комнату' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Post()
  create(@Body() dto: RoomDto) {
    return this.roomService.create(dto);
  }

  @ApiOperation({ summary: 'Изменить комнату' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: RoomDto) {
    return this.roomService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удалить комнату' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.roomService.delete(id);
  }

  @Post(':id/photos')
  createPhoto(@Param('id') id: number) {}

  @Delete(':id/photos:photoId')
  deletePhoto(@Param('photoId') id: number) {}
}
