import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserDto } from 'src/user/dto';
import { AuthService } from './auth.service';
import { LoginDto} from './dto';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){}

    @Post('register')
    register(@Body() dto: UserDto) {
        return this.authService.register(dto)
    }

    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @Get('logout')
    logout() {
        return this.authService.logout();
    }
}
