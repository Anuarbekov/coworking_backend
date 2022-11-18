import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoworkingController } from './coworking.controller';
import { CoworkingService } from './coworking.service';

@Module({
  imports: [PrismaModule],
  controllers: [CoworkingController],
  providers: [CoworkingService]
})
export class CoworkingModule {}
