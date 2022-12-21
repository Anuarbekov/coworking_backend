import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/role/roles.decorator';
import { EventDto } from 'src/event/dto';
import { EventService } from 'src/event/event.service';
import { UserDto } from './dto';
import { UserService } from './user.service';
import { RolesGuard } from 'src/auth/role/roles.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Пользователи')
@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private eventService: EventService,
  ) {}

  @ApiOperation({ summary: 'Список всех юзеров' })
  @ApiResponse({ status: 200, type: [UserDto] })
  @Roles('USER', 'ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':id')
  get(@Param('id') id: number) {
    return this.userService.get(Number(id));
  }

  @ApiOperation({ summary: 'Создание юзера' })
  @ApiResponse({ status: 200, type: UserDto })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @ApiOperation({ summary: 'Изменения юзера' })
  @ApiResponse({ status: 200, type: UserDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление юзера' })
  @ApiResponse({ status: 200, type: UserDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(Number(id));
  }

  //User-Events routes:
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'USER')
  @Get(':userId/events')
  getEvents(@Param('id') id: number) {
    return;
  }

  @ApiOperation({ summary: 'Создание ивента' })
  @ApiResponse({ status: 200, type: EventDto })
  @Post(':userId/events')
  createEvent(@Param('id') id: number, @Body() dto: EventDto) {
    return this.eventService.create(id, dto);
  }

  @ApiOperation({ summary: 'Изменение ивента' })
  @ApiResponse({ status: 200, type: EventDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'USER')
  @Put(':userId/events/:eventId')
  updateEvent(
    @Param('userId') userId: number,
    @Param('eventId') id: number,
    @Body() dto: EventDto,
  ) {
    return this.eventService.update(userId, id, dto);
  }

  @ApiOperation({ summary: 'Удаление ивента' })
  @ApiResponse({ status: 200, type: EventDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'USER')
  @Delete(':userId/events/:eventId')
  deleteEvent(
    @Param('userId') userId: number,
    @Param('eventId') eventId: number,
  ) {
    return this.eventService.delete(userId, eventId);
  }

  @ApiOperation({ summary: 'Aprove ивента' })
  @ApiResponse({ status: 200, type: String })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Put('/events/:eventId/:passed')
  approveEvent(@Param('eventId') id: number, @Param('passed') passed: boolean) {
    return this.eventService.approve(id, passed);
  }
}
