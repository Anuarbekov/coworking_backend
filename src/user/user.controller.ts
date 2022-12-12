import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/role/roles.decorator';
import { EventDto } from 'src/event/dto';
import { EventService } from 'src/event/event.service';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService, private eventService: EventService){}

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin', 'user')
    @Get()
    getAll(){
        return this.userService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number){
        return this.userService.get(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @Post()
    create(@Body() dto: UserDto){
        return this.userService.create(dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UserDto){
        return this.userService.update(id, dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.userService.delete(id);
    }

    //User-Events routes:
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin', 'user')
    @Get(':userId/events')
    getEvents(@Param('id') id: number){
        return ;
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin', 'user')
    @Post(':userId/events')
    createEvent(@Param('id') id: number, @Body() dto: EventDto){
        return this.eventService.create(id, dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin', 'user')
    @Put(':userId/events/:eventId')
    updateEvent(@Param('userId') userId: number, @Param('eventId') id: number,  @Body() dto: EventDto){
        return this.eventService.update(userId, id, dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin', 'user')
    @Delete(':userId/events/:eventId')
    deleteEvent(@Param('userId') userId: number, @Param('eventId') eventId: number){
        return this.eventService.delete(userId, eventId);
    }

}
