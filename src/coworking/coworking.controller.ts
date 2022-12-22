import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/role/roles.decorator';
import { CoworkingService } from './coworking.service';
import { CoworkingDto } from './dto';
import { User } from 'src/utils/request.user.decorator';
import { HiddenGuard } from 'src/auth/role/guards/hidden.guard';

@Controller('coworkings')

export class CoworkingController {

    constructor(private coworkingService: CoworkingService){}

    @UseGuards(HiddenGuard)
    @Get()
    getAll(@Req() req){
        // console.log(req)
        console.log(req.user);
        // console.log(user.id);
        // console.log(req.url);
        return this.coworkingService.getAll();
    }

    @UseGuards(AuthGuard('block'))
    @Get(':id')
    get(@Param('id') id: number){
        return this.coworkingService.get(id);
    }

    // @UseGuards(AuthGuard('jwt'))
    // @Roles('admin')
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
