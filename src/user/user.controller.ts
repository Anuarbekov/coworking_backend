import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventService } from 'src/event/event.service';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService, eventService: EventService){}

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

    @Get(':id/events')
    getEvents(@Param('id') id: number){
        return ;
    }

    @Post(':id/events')
    createEvent(@Param('id') id: number){
        return this.userService.;
    }

    @Delete(':id/events/:eventId')
    deleteEvent(@Param('id') id: number){
        return this.userService.;
    }

}
