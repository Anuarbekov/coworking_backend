import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/user/dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger/dist';

@ApiTags('Аутентификация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Регистрация юзера' })
  @ApiResponse({ status: 200, type: UserDto || String })
  @Post('register')
  register(@Body() dto: UserDto) {
    return this.authService.register(dto);
  }

  @ApiOperation({ summary: 'Логин' })
  @ApiResponse({ status: 200, type: String })
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('logout')
  logout() {
    return this.authService.logout();
  }
}
