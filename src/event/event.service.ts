import { Injectable, NotFoundException } from '@nestjs/common';
import { use } from 'passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventDto } from './dto';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService){}
    
    async getAll(){
        return await this.prisma.event.findMany({});
    }

    async get(id: number){
        const event = await this.prisma.event.findFirst({
            where:{
                id: id
            }
        })
        if(!event) throw new NotFoundException("event with id: " + id + " not found")
        return event;
    }

    async getUserEvents(userid:number){
        const event = await this.prisma.event.findMany({
            where:{
                userId: userid
            }
        })
        if(!event) throw new NotFoundException("event with id: " + id + " not found")
        return event;
    }

    async createEvent(user_id: number, dto: EventDto){
        const event = await this.prisma.event.create({
            data:{
                start_time: dto.start_time,
                end_time: dto.end_time,
    
                user: {
                    connect: {
                        id: user_id
                    }
                }, 
                room: {
                    connect: {
                        id: dto.roomId
                    }
                },
                description: dto.description,
                is_approved: dto.is_approved,
                is_passed : true
            }
        })
        return "Successfully created new event!";
    }

}
