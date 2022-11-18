import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CoworkingService } from './coworking.service';
import { CoworkingDto } from './dto';

@Controller('coworkings')
export class CoworkingController {

    constructor(private coworkingService: CoworkingService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAll(){
        return this.coworkingService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number){
        return this.coworkingService.get(id);
    }

    @Post()
    create(@Body() dto : CoworkingDto){
        return this.coworkingService.create(id);
    }

    @Put(':id')
    update(@Param('id') id: number){
        return this.coworkingService.update(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.coworkingService.delete(id)
    }
}
