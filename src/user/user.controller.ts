import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventDto } from 'src/event/dto';
import { EventService } from 'src/event/event.service';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService, private eventService: EventService){}

    @Get()
    getAll(){
        return this.userService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number){
        return this.userService.get(id);
    }

    @Post()
    create(@Body() dto: UserDto){
        return this.userService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UserDto){
        return this.userService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.userService.delete(id);
    }

    //User-Events routes:
    @Get(':userId/events')
    getEvents(@Param('id') id: number){
        return ;
    }

    @Post(':userId/events')
    createEvent(@Param('id') id: number, @Body() dto: EventDto){
        return this.eventService.create(id, dto);
    }

    @Put(':userId/events/:eventId')
    updateEvent(@Param('userId') userId: number, @Param('eventId') id: number,  @Body() dto: EventDto){
        return this.eventService.update(userId, id, dto);
    }

    @Delete(':userId/events/:eventId')
    deleteEvent(@Param('userId') userId: number, @Param('eventId') eventId: number){
        return this.eventService.delete(userId, eventId);
    }

}
