import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

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
}
