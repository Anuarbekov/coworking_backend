import { EventDto } from 'src/event/dto';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger/dist';
import { Roles } from 'src/auth/role/roles.decorator';
import { RolesGuard } from 'src/auth/role/roles.guard';

@ApiTags('Events')
@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @ApiBearerAuth()
  @Roles('USER', 'ADMIN')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Список ивентов' })
  @ApiResponse({ status: 200, type: [EventDto] })
  @Get()
  getAll() {
    return this.eventService.getAll();
  }

  @ApiBearerAuth()
  @Roles('USER', 'ADMIN')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Ивент по айди' })
  @ApiResponse({ status: 200, type: EventDto })
  @Get(':id')
  get(@Param('id', new ParseIntPipe()) id: number) {
    return this.eventService.get(id);
  }
}
