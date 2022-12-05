import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventDto } from './dto';


@Injectable()
export class EventService {
    constructor(private prisma: PrismaService){}
    
    async getAll(){
        return await this.prisma.event.findMany({
            where:{
                is_approved: true
            }
        });
    }

    async getAllApproved(start_time: Date, end_time: Date){
        return await this.prisma.event.findMany({
            where:{
                is_approved: true,
                start_time:{
                    gte: start_time
                },
                end_time:{
                    lte: end_time
                }
            }
        });
    }

    async getApproved(id: number){
        const event = await this.prisma.event.findFirst({
            where:{
                id: id,
                is_approved: true
            }
        })
        if(!event) throw new NotFoundException("event with id: " + id + " not found")
        return event;
    }

    async getUserEvents(userid: number){
        const event = await this.prisma.event.findMany({
            where:{
                userId: userid
            }
        })
        if(!event) throw new NotFoundException("event with id: " +userid + " not found")
        return event;
    }

    async getUserEventsApproved(userid: number){
        const event = await this.prisma.event.findMany({
            where:{
                userId: userid,
                is_approved: true
            }
        })
        if(!event) throw new NotFoundException("event with id: " +userid + " not found")
        return event;
    }

    async getUserEventsPassed(userid: number){
        const event = await this.prisma.event.findMany({
            where:{
                userId: userid,
                is_approved: true
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

    async pass(id: number, passed: boolean){
        await this.prisma.event.updateMany({
            data: {
                is_approved: true,
                is_passed: passed
            },
            where:{
                id: id
            }
        });
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
