import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async getAll(){
        return await this.prisma.user.findMany({});
    }

    async get(id: number){
        const user = await this.prisma.user.findFirst({
            where:{
                id: id
            }
        })
        if(!user) throw new NotFoundException("user with id: " + id + " not found")
        return user;
    }

    async create(dto: UserDto){
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

    async update(id: number, dto: UserDto){
        const password = await argon.hash(dto.password);
        await this.prisma.user.update({
            data: {
                email: dto.email,
                password: password,
                firstname: dto.firstname,
                lastname: dto.lastname,
                phone: dto.phone,
                role: dto.role,
                telegram: dto.telegram
            },
            where: {
                id: id
            }
        })
        return "Successfully updated user: " + id + "to: \n" + dto;
    }
    async delete(id: number){
        await this.prisma.user.delete({
            where: {
                id: id
            }
        })
        return "Successfully deleted user: " + id;
    }

    
}
