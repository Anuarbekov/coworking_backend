import { EventDto } from 'src/event/dto';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EventService } from './event.service';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';

@ApiTags('Events')
@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @ApiOperation({ summary: 'Список ивентов' })
  @ApiResponse({ status: 200, type: [EventDto] })
  @Get()
  getAll() {
    return this.eventService.getAll();
  }

  @ApiOperation({ summary: 'Ивент по айди' })
  @ApiResponse({ status: 200, type: EventDto })
  @Get(':id')
  get(@Param('id', new ParseIntPipe()) id: number) {
    return this.eventService.get(id);
  }
}
