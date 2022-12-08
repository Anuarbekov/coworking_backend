import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { CoworkingService } from './coworking.service';
import { CoworkingDto } from './dto';

@Controller('coworkings')

export class CoworkingController {

    constructor(private coworkingService: CoworkingService){}
    @Get()
    getAll(){
        return this.coworkingService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number){
        return this.coworkingService.get(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @Post()
    create(@Body() dto : CoworkingDto){
        return this.coworkingService.create(dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @Put(':id')
    update(@Param('id') id: number, @Body() dto : CoworkingDto){
        return this.coworkingService.update(id, dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.coworkingService.delete(id);
    }
}
