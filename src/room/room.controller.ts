import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { RoomDto } from './dto';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
    constructor(private roomService: RoomService){}
    @Get()
    getAll(){
        return this.roomService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number){
        return this.roomService.get(id);
    }

    @Post()
    create(@Body() dto: RoomDto){
        return this.roomService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto : RoomDto){
        return this.roomService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.roomService.delete(id);
    }

    @Post(':id/photos')
    createPhoto(@Param('id') id: number){
    }

    @Delete(':id/photos:photoId')
    deletePhoto(@Param('photoId') id: number){
    }
}
