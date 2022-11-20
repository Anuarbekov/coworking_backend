import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as argon from 'argon2'


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService){}

    async login (dto: LoginDto) {

        const user = await this.prisma.user.findFirst({
            where:{
                OR: [
                    {
                        email: dto.emailOrPhone
                    },
                    {
                        phone: dto.emailOrPhone
                    }
                ],
            }
        })
        if(!user)
            throw new NotFoundException("Email not found!");
        
        const passwordMatch = await argon.verify(user.password, dto.password);
        if(!passwordMatch)
            throw new ForbiddenException("Incorrect Password!");
        
        return await this.signToken(user.id, user.email, user.role);
    }
    
    logout() {

    }

    async signToken(userId: number, email: string, role: string): Promise<Object>{
        const tokenData = {
            sub: userId,
            email, role
        }
        const token = await this.jwt.signAsync(
            tokenData, 
            {
                expiresIn: '1d',
                secret: process.env.JWT_SECRET
            }
        )
        console.log(token);
        return {Access_Token: token};
    }
}
