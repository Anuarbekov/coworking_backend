import { CoworkingDto } from './dto/coworking.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoworkingService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.coworking.findMany({});
  }

  async get(id: number) {
    const coworking = await this.prisma.coworking.findFirst({
      where: {
        id: id,
      },
    });
    if (!coworking)
      throw new NotFoundException('Coworking with id: ' + id + ' not found');
    return coworking;
  }

  async create(dto: CoworkingDto) {
    const coworking = await this.prisma.coworking.create({
      data: {
        name: dto.name,
        address: dto.address,
      },
    });
    return coworking;
  }

  async update(id: number, dto: CoworkingDto) {
    const coworking = await this.prisma.coworking.update({
      data: {
        name: dto.name,
        address: dto.address,
      },
      where: {
        id: id,
      },
    });
    return coworking;
  }

  async delete(id: number) {
    const coworking = await this.prisma.coworking.delete({
      where: {
        id: id,
      },
    });

    return coworking;
  }
}
