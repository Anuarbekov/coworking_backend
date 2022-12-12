import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/role/roles.decorator';
import { GetEventDto } from './dto/get.event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService){}

    @Get()
    getAll(@Body() dto: GetEventDto){
        return this.eventService.getAll(dto);
    }
    
    @Get(':id')
    get(@Param('id') id: number){
        return this.eventService.get(id);
    }

}
