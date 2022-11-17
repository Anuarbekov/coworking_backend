import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){}

    @Post('register')
    register() {
        return 'I am registering'
    }

    @Post('login')
    login() {
        return 'I am loggin in'
    }

    @Get('logout')
    logout() {
        
    }
}
