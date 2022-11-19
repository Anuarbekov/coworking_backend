import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoomDto } from './dto';

@Injectable()
export class RoomService {
    constructor(private prisma: PrismaService){}

    async getAll(){
        return await this.prisma.room.findMany({ })
    }

    async get(id: number){
        const room = this.prisma.room.findFirst({
            where:{
                id: id
            }
        })
        if(!room)
            throw new NotFoundException("Room with id: " + id + " not found")
        return room; 
    }

    async create(dto: RoomDto){
        await this.prisma.room.create({
            data:{
                title: dto.title,
                description: dto.description,
                coworkingId: dto.coworkingId,
                price: dto.price,
                max_people_num: dto.max_people_num,
            }
        })
        return "Successfully created room: " + dto.title;
    }

    async update(id: number, dto: RoomDto){
        await this.prisma.room.update({
            data: {
                title: dto.title,
                description: dto.description,
                coworkingId: dto.coworkingId,
                price: dto.price,
                max_people_num: dto.max_people_num,
            },
            where: {
                id: id
            }
        })
        return "Successfully updated room: " + id + "to: \n" + dto;
    }
    async delete(id: number){
        await this.prisma.room.delete({
            where: {
                id: id
            }
        })
        return "Successfully deleted room: " + id;
    }
    async uploadPhoto(id: number){
        
    }
}
