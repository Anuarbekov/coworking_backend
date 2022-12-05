import { Body, Controller, Get, Param } from '@nestjs/common';
import { EventDto } from './dto';
import { GetEventDto } from './dto/get.event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService){}

    @Get()
    getAll(@Body() dto: GetEventDto){
        return this.eventService.getAll(dto);
    }

    // @Get(':id')
    // get(@Param('id') id: number, ){
    //     return this.eventService.get
    // }

}
