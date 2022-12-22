import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoomDto } from './dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.room.findMany({});
  }

  async get(id: number) {
    const room = this.prisma.room.findFirst({
      where: {
        id: id,
      },
    });
    if (!room)
      throw new NotFoundException('Room with id: ' + id + ' not found');
    return room;
  }

  async create(dto: RoomDto) {
    const room = await this.prisma.room.create({
      data: {
        title: dto.title,
        description: dto.description,
        coworkingId: dto.coworkingId,
        price: dto.price,
        max_people_num: dto.max_people_num,
      },
    });
    return room;
  }

  async update(id: number, dto: RoomDto) {
    const room = await this.prisma.room.update({
      data: {
        title: dto.title,
        description: dto.description,
        coworkingId: dto.coworkingId,
        price: dto.price,
        max_people_num: dto.max_people_num,
      },
      where: {
        id: id,
      },
    });
    return room;
  }
  async delete(id: number) {
    const room = await this.prisma.room.delete({
      where: {
        id: id,
      },
    });
    return room;
  }
  async uploadPhoto(id: number) {}
}
