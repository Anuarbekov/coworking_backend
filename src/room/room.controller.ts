import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { RoomDto } from './dto';
import { RoomService } from './room.service';

import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger/dist';
import { Roles } from 'src/auth/role/roles.decorator';
import { RolesGuard } from 'src/auth/role/roles.guard';

@ApiTags('Комнаты')
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @ApiBearerAuth()
  @Roles('USER', 'ADMIN')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Список комнат' })
  @ApiResponse({ status: 200, type: [RoomDto] })
  @Get()
  getAll() {
    return this.roomService.getAll();
  }

  @ApiOperation({ summary: 'Комната по айди' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Get(':id')
  get(@Param('id', new ParseIntPipe()) id: number) {
    return this.roomService.get(id);
  }

  @ApiBearerAuth()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Создать комнату' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Post()
  create(@Body() dto: RoomDto) {
    return this.roomService.create(dto);
  }

  @ApiBearerAuth()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Изменить комнату' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Put(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() dto: RoomDto) {
    return this.roomService.update(id, dto);
  }

  @ApiBearerAuth()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Удалить комнату' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.roomService.delete(id);
  }

  @Post(':id/photos')
  createPhoto(@Param('id') id: number) {}

  @Delete(':id/photos:photoId')
  deletePhoto(@Param('photoId') id: number) {}
}
