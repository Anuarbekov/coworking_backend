import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('coworking')
export class CoworkingController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAll(){
        return "OK";
    }

    @Get(':id')
    get(@Param('id') id: number){
        
    }
}
