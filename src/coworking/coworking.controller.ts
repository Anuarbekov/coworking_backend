import { RolesGuard } from 'src/auth/role/roles.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/role/roles.decorator';
import { CoworkingService } from './coworking.service';
import { CoworkingDto } from './dto';

import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger/dist';

@ApiTags('Коворкинг')
@Controller('coworkings')
export class CoworkingController {
  constructor(private coworkingService: CoworkingService) {}
  @ApiOperation({ summary: 'Список всех коворкингов' })
  @ApiResponse({ status: 200, type: [CoworkingDto] })
  @Get()
  getAll() {
    return this.coworkingService.getAll();
  }

  @ApiOperation({ summary: 'Коворкинг по id' })
  @ApiResponse({ status: 200, type: CoworkingDto })
  @Get(':id')
  get(@Param('id', new ParseIntPipe()) id: number) {
    return this.coworkingService.get(id);
  }

  @ApiOperation({ summary: 'Создать коворкинг' })
  @ApiResponse({ status: 200, type: CoworkingDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() dto: CoworkingDto) {
    return this.coworkingService.create(dto);
  }

  @ApiOperation({ summary: 'Изменить коворкинг' })
  @ApiResponse({ status: 200, type: CoworkingDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: CoworkingDto,
  ) {
    return this.coworkingService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удалить коворкинг' })
  @ApiResponse({ status: 200, type: CoworkingDto })
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.coworkingService.delete(id);
  }
}
