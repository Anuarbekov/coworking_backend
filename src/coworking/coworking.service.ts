import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CoworkingDto } from './dto';

@Injectable()
export class CoworkingService {
    constructor(private prisma: PrismaService){}

    async getAll(){
        return await this.prisma.coworking.findMany({});
    }

    async get(id: number){
        const coworking = await this.prisma.coworking.findFirst({
            where:{
                id: id
            }
        });
        if(!coworking)
            throw new NotFoundException("Coworking with id: " + id + " not found")
        return coworking;
    }

    async create(dto: CoworkingDto){
        await this.prisma.coworking.create({
            data: {
                name: dto.name,
                address: dto.address
            }
        })
        return "Created coworking: " + dto.name;
    }

    async update(id: number, dto: CoworkingDto){
        await this.prisma.coworking.update({
            data:{
                name: dto.name,
                address: dto.address 
            },
            where:{
                id: id
            }
        })
        return "Updated coworking, name: " + dto.name + ", address" + dto.address;
    }

    async delete(id: number){
        await this.prisma.coworking.delete({
            where:{
                id: id
            }
        })

        return "Deleted coworking with id: " + id;
    }
}
