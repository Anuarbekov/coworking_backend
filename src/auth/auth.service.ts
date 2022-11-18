import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService){}
    
    async register(dto: RegisterDto) {
        const password = await argon.hash(dto.password);
        try{
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password,
                    firstname: dto.firstname,
                    lastname: dto.lastname,
                    phone: dto.phone,
                    role: dto.role,
                    telegram: dto.telegram
                }
            });
            return "Successfully created user with email: " + user.email;
        }
        catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002')
                    throw new ForbiddenException('Email already exists, take another one!');
            }
            throw error;
        }
        
    }

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
