import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventDto } from './dto';
import { GetEventDto } from './dto/get.event.dto';


@Injectable()
export class EventService {
    constructor(private prisma: PrismaService){}
    
    async get(id: number){
        return await this.prisma.event.findMany({
            where:{
                id: id
            }
        });
    }

    async getAll(dto: GetEventDto){
        return await this.prisma.event.findMany({

            where:{
                start_time:{
                    lt: dto.start_time != null ? dto.start_time : undefined
                },
                end_time:{
                    lt: dto.end_time != null ? dto.end_time : undefined
                },
                is_approved: dto.is_approved != null ? dto.is_approved : undefined,
                is_passed: dto.is_passed != null ? dto.is_passed : undefined,
                roomId: dto.roomId != null ? dto.roomId : undefined

            }
        });
    }

    async getUserEvents(userid: number, dto: GetEventDto){
        const event = await this.prisma.event.findMany({
            where:{
                userId: userid,
                start_time:{
                    lt: dto.start_time != null ? dto.start_time : undefined
                },
                end_time:{
                    lt: dto.end_time != null ? dto.end_time : undefined
                },
                is_approved: dto.is_approved != null ? dto.is_approved : undefined,
                is_passed: dto.is_passed != null ? dto.is_passed : undefined,
                roomId: dto.roomId != null ? dto.roomId : undefined
            }
        })
        if(!event) throw new NotFoundException("event with id: " +userid + " not found")
        return event;
    }
    
    async create(userId: number, dto: EventDto){
        if(dto.roomId == null)
            return "Room was not chosen";
        const roomId :number = dto.roomId;
        await this.prisma.event.create({
            data: {
                title: dto.title,
                start_time: dto.start_time,
                end_time: dto.end_time,
                userId: userId,
                roomId: roomId,
                description: dto.description,
                is_approved: false,
                is_passed: false,
            }
        });
        return "Successfully created new event!";
    }

    async approve(id: number, passed: boolean): Promise<String>{
        await this.prisma.event.updateMany({
            data: {
                is_approved: true,
                is_passed: passed
            },
            where:{
                id: id
            }
        });
        if(passed)
            return "Event with id: " + id + "passed approval";
        return "Event with id: " + id + "failed approval";
    }

    async update(userId: number, eventId: number, dto: EventDto){
        await this.prisma.event.updateMany({
            data: {
                title: dto.title,
                start_time: dto.start_time,
                end_time: dto.end_time,
                roomId: dto.roomId,
                description: dto.description,
                is_approved: dto.is_approved,
            },
            where:{
                id: eventId,
                userId: userId,
            }
        });
        return "Successfully created new event!";
    }

    async delete(userId: number, eventId: number){
        const event = await this.prisma.event.deleteMany({
            where:{
                id: eventId,
                userId: userId
            }
        })
        return "Successfully deleted new event!";
    }

}
