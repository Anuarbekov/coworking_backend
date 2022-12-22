import { EventDto } from 'src/event/dto';
import { Body, Controller, Get, Param } from '@nestjs/common';
import { GetEventDto } from './dto/get.event.dto';
import { EventService } from './event.service';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';

@ApiTags('Events')
@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @ApiOperation({ summary: 'Список ивентов' })
  @ApiResponse({ status: 200, type: [EventDto] })
  @Get()
  getAll(@Body() dto: GetEventDto) {
    return this.eventService.getAll(dto);
  }

  @ApiOperation({ summary: 'Ивент по айди' })
  @ApiResponse({ status: 200, type: EventDto })
  @Get(':id')
  get(@Param('id') id: number) {
    return this.eventService.get(id);
  }
}
